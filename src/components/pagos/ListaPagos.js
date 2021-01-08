import React from 'react'
import { connect } from 'react-redux';
import { compose } from 'redux';
import { firestoreConnect } from 'react-redux-firebase';
import './ListaPagos.css'
import Pago from './Pago';
import PagosNavBar from './layout/PagosNavBar';
import PagoNuevo from './PagoNuevo';
import ReactHTMLTableToExcel from "react-html-table-to-excel";


class ListaPagos extends React.Component {

    state = {
        pagosState: null,
        paraleloFiltrado: ''
    }

    OnFiltrarPorParalelo = (OpcDelFiltro) => {
        const { pagos } = this.props;
        if (OpcDelFiltro) {
            let pagosTemp = [], paraleloFiltrado;
            this.props.pagos.forEach(pago => {
                if (pago.paralelo === OpcDelFiltro) {
                    pagosTemp = [...pagosTemp, pago];
                    paraleloFiltrado = pago.paralelo;
                }
            });
            this.setState({ pagosState: pagosTemp, paraleloFiltrado });
        } else {
            this.setState({ pagosState: pagos, paraleloFiltrado: '' });
        }
    }
    render() {
        let { pagos, paralelos } = this.props;
        let costosActualesParalelos = [];
        paralelos &&
            paralelos.forEach(p => {
                costosActualesParalelos = [...costosActualesParalelos, { paralelo: p.nombreParalelo, costoActual: p.costoxEstudiante }];
            });
        let { pagosState } = this.state;
        if (pagosState === null) {
            pagosState = pagos
        }
        return (
            <div className="col s12 lista-pagos">
                <div className="row PagosTitle">
                    <div style={{ textAlign: 'center' }}>
                        <h3>Pagos</h3>
                    </div>
                </div>
                <div className="section align-center">
                    <PagoNuevo paralelos={paralelos} />
                    <div className="row">
                        <div className="col s12">
                            <PagosNavBar paralelos={paralelos} OnFiltrarPorParalelo={this.OnFiltrarPorParalelo} />
                        </div>
                    </div>
                    <ReactHTMLTableToExcel
                        id="test-table-xls-button"
                        className="BotonDescargaExcel"
                        table={"tablaPagos" + this.state.paraleloFiltrado}
                        filename={"Pagos en el Paralelo " + this.state.paraleloFiltrado}
                        sheet="xls"
                        buttonText="Exportar como archivo Excel"
                    />
                    <div className="containerTablaPagos">
                        <table className="responsive-table highlight" style={{ border: '1px solid grey' }} id={"tablaPagos" + this.state.paraleloFiltrado} >
                            <thead>
                                <tr>
                                    <th>No</th>
                                    <th>Nombre Estudiante</th>
                                    <th>Paralelo</th>
                                    <th>Monto Pagado</th>
                                    <th>Deuda</th>
                                    <th>Reembolso</th>
                                    <th>Estado</th>
                                    <th></th>
                                </tr>
                            </thead>

                            <tbody>
                                {pagosState &&
                                    pagosState.map((pago, index) => {
                                        return (
                                            <Pago idPago={pago.id} costosActualesParalelos={costosActualesParalelos} key={index} />
                                        )
                                    })
                                }
                            </tbody>
                        </table>


                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    console.log(state.firestore.ordered.pagos);
    return {
        pagos: state.firestore.ordered.pagos,
        paralelos: state.firestore.ordered.paralelosConvocados
    }
}

export default compose(
    connect(mapStateToProps),
    firestoreConnect([{
        collection: 'pagos'
    },
    {
        collection: 'paralelosConvocados'
    }
    ])
)(ListaPagos);