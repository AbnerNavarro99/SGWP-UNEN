import React from 'react'
import { connect } from 'react-redux';
import { compose } from 'redux'
import { Button } from 'react-materialize'
import { firestoreConnect } from 'react-redux-firebase'
import { NuevoPago } from '../../store/actions/AccionesPagos';
// import Button from 'materialize-css';

class PagoNuevo extends React.Component {

    state = {
        carnet: "",
        nombreEstudiante: "",
        mensajeNoEncontrado: "",
        paralelosInscritos: null,
        deudaTotal: 0,
        montoPagoSugerido: 0,
        montoPagado: 0,
        paraleloAPagar: '',
        estudianteQuePaga: null,
        nombreParaleloAPagar: ''
    }

    onCarnetSubmit = (e) => {
        e.preventDefault();
        const { usuarios } = this.props;
        let Usuario;
        let { carnet } = this.state;
        usuarios &&
            usuarios.forEach(user => {
                let userCarnet = user.noCarnet;
                if (userCarnet.toUpperCase() === carnet.toUpperCase()) {
                    Usuario = user;
                    this.setState({ estudianteQuePaga: user })
                }
            });

        let paralelosInscritos = [];
        let deudaTotal = 0;
        if (Usuario) {
            const { paralelos } = this.props;
            Usuario.paralelosInscritos.forEach(par => {
                paralelos.forEach(parC => {
                    if (par === parC.id) {
                        paralelosInscritos = [...paralelosInscritos, parC];
                        deudaTotal = deudaTotal + parC.costoxEstudiante;
                    }
                });
            });
            this.setState({
                nombreEstudiante: Usuario.nombres + " " + Usuario.apellidos,
                paralelosInscritos: paralelosInscritos,
                deudaTotal
            })
        }

    }

    // onCambiarMontoPagado = () => {

    // }

    RealizarPago = () => {
        const { montoPagado, montoPagoSugerido, estudianteQuePaga, nombreParaleloAPagar } = this.state;
        if (estudianteQuePaga && nombreParaleloAPagar && montoPagado !== 0 && montoPagoSugerido !== 0) {
            let deuda = montoPagoSugerido - montoPagado;
            let reembolso = 0;

            if (deuda < 0) {
                deuda = 0;
                reembolso = montoPagado - montoPagoSugerido;
            }

            let estado = true;
            let fecha = new Date();

            const pago = {
                deuda,
                paralelo: nombreParaleloAPagar,
                reembolso,
                estado,
                fecha,
                usuario: estudianteQuePaga,
                montoPagado
            };
            this.props.NuevoPago(pago);
            const element = document.getElementById('montoPagado');
            element.value = 0;
            this.setState({
                montoPagado: 0
            })
            alert("Pago exitoso");
        } else {
            alert("Proporcione la información necesaria")
        }
    }

    onChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }

    onParaleloAPagarChange = (e) => {
        const { paralelosData } = this.props;
        let idParalelo = e.target.value;
        let montoPago = 0, paralelo;
        let nombreParaleloAPagar = '';
        if (paralelosData) {
            paralelo = paralelosData[idParalelo];
            if (paralelo)
                montoPago = paralelo.costoxEstudiante;
            nombreParaleloAPagar = paralelo.nombreParalelo
        }
        this.setState({
            [e.target.id]: e.target.value,
            montoPagoSugerido: montoPago,
            nombreParaleloAPagar,
        })
    }
    render() {

        const { paralelosInscritos, nombreEstudiante, deudaTotal } = this.state;
        return (
            <div className="container">
                <div className="row">
                    <div className="col s12">
                        <ul className="collapsible">
                            <li>
                                <div className="collapsible-header"><i className="material-icons">attach_money</i>Nuevo Pago</div>
                                <div className="collapsible-body">
                                    <div className="row">
                                        <form onSubmit={this.onCarnetSubmit} className="col s12">
                                            <div className="input-field col s6">
                                                <input id="carnet" type="text" className="validate" onChange={this.onChange} />
                                                <label htmlFor="carnet">Número de Carnet</label>
                                            </div>
                                        </form>
                                        <p>Nombre: {nombreEstudiante}</p>
                                        <table className="responsive-table col s12 m6 striped" style={{ border: '1px solid grey' }}>
                                            <thead>
                                                <tr>
                                                    <th>Paralelos</th>
                                                    <th>Costo Actual</th>
                                                </tr>
                                            </thead>

                                            <tbody>
                                                {
                                                    paralelosInscritos &&
                                                    paralelosInscritos.map(par => {
                                                        return (
                                                            <tr key={par.id} >
                                                                <td>{par.nombreParalelo} </td>
                                                                <td>{par.costoxEstudiante} </td>
                                                            </tr>
                                                        )
                                                    })
                                                }
                                                <tr>
                                                    <th>Total</th>
                                                    <td>{deudaTotal}</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                        <div className="col s12 m5">
                                            <div className="col s12">
                                                <div className="input-field">
                                                    <select defaultValue="0" className="browser-default" id="paraleloAPagar" onChange={this.onParaleloAPagarChange}>
                                                        <option value="0" disabled>Elige el paralelo</option>
                                                        {paralelosInscritos &&
                                                            paralelosInscritos.map(par => {
                                                                return (
                                                                    <option key={par.id} value={par.id}>{par.nombreParalelo}</option>
                                                                )
                                                            })
                                                        }
                                                    </select>
                                                </div>
                                                <div className="input-field col s6">
                                                    <input id="montoPagado" type="number" className="validate"
                                                        // placeholder={montoPagoSugerido > 0 ? montoPagoSugerido : null} 
                                                        onChange={this.onChange}
                                                    />
                                                    <label htmlFor="montoPagado">Monto</label>
                                                </div>
                                                <div className="col s6">
                                                    <Button
                                                        onClick={() => this.RealizarPago()}
                                                    >Pagar</Button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">

                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        usuarios: state.firestore.ordered.usuarios,
        paralelosData: state.firestore.data.paralelosConvocados
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        NuevoPago: (pago) => dispatch(NuevoPago(pago))
    }
}

export default compose(connect(mapStateToProps, mapDispatchToProps),
    firestoreConnect([
        {
            collection: 'usuarios'
        },
        {
            collection: 'paralelosConvocados'
        }
    ])
)(PagoNuevo)
