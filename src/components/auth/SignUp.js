import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import { signUp } from './../../store/actions/AuthActions';

class SignIn extends Component {

    state = {
        correo: '',
        correoCorrecto: null,
        contrasenha: '',
        confContrasenha: '',
        confContrasenhaCorrecto: null,
        nombres: '',
        nombresCorrecto: null,
        apellidos: '',
        apellidosCorrecto: null,
        noCarnet: '',
        noCarnetCorrecto: null,
        noTelefono: '',
        noTelefonoCorrecto: null
    }

    onHandleSubmit = (e) => {
        e.preventDefault();

        const PrevState = this.state;
        let { correo,
            contrasenha,
            confContrasenha,
            nombres,
            apellidos,
            noCarnet,
            noTelefono } = PrevState;

        let erNombres = /^([A-ZÀ-ÿ\u00f1]([a-zÀ-ÿ\u00d1]){2,})\s?([A-ZÀ-ÿ\u00f1]([a-zÀ-ÿ\u00d1]){2,}\s?)*([A-ZÀ-ÿ\u00f1]([a-zÀ-ÿ\u00d1]){2,}\s?)*\s*$/;
        let erApellidos = /^([A-ZÀ-ÿ\u00f1]([a-zÀ-ÿ\u00d1]){2,})\s?([A-ZÀ-ÿ\u00f1]([a-zÀ-ÿ\u00d1]){2,}\s?)*([A-ZÀ-ÿ\u00f1]([a-zÀ-ÿ\u00d1]){2,}\s?)*\s*$/;
        let erCorreo = /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;
        let erCarnet = /20[0-9]{2}-[0-9]{4}[0-9U]/i;
        let erTelefono = /[0-9]{4}(\s|[-])[0-9]{4}/;
        let respuestaNombres = erNombres.test(nombres);
        let respuestaApellidos = erApellidos.test(apellidos);
        let respuestaCorreo = erCorreo.test(correo);
        let respuestaCarnet = erCarnet.test(noCarnet);
        let respuestaNoTelefono = erTelefono.test(noTelefono);

        if (respuestaCorreo) {
            this.setState({
                correoCorrecto: true
            })
        } else {
            this.setState({
                correoCorrecto: false
            })
            return
        }

        if (respuestaNombres) {
            this.setState({
                nombresCorrecto: true
            })
        } else {
            this.setState({
                nombresCorrecto: false
            })
            return
        }

        if (respuestaApellidos) {
            this.setState({
                apellidosCorrecto: true
            })
        } else {
            this.setState({
                apellidosCorrecto: false
            })
            return
        }

        if (respuestaCarnet) {
            this.setState({
                noCarnetCorrecto: true
            })
        } else {
            this.setState({
                noCarnetCorrecto: false
            })
            return
        }

        if (respuestaNoTelefono) {
            this.setState({
                noTelefonoCorrecto: true
            })
        } else {
            this.setState({
                noTelefonoCorrecto: false
            })
            return
        }

        if (contrasenha === confContrasenha) {
            this.setState({
                confContrasenhaCorrecto: true
            })
        } else {
            this.setState({
                confContrasenhaCorrecto: false
            })
            return
        }
        this.props.signUp(this.state);
    }


    /* 
        METACARACTERES
        - SUSTITUCION: Los que definen qué esperamos en un determinado lugar (del patrón)
            . (punto) --> Acepta cualquier simbolo o caracter
            [ao] --> es un listado de caracteres validos en ese lugar del patron
            [a-e] --> si entre corchetes tenes un guion entre dos simbolos, es un rango. Ascendente. a-z
            [a-eop] --> se permite la mezcla entre rangos y opciones
            (palabra|otra|otramas|unaultima)
        
        -ATAJOS
            \w --> representa cualquier caracter alfanumerico (a-z A-Z 0-9 _)
            \d --> representa solo digitos [0-9]
            \s --> representa cualquier signo de espacio (barra, tab, enter)
            \b --> representa cualquier delimitador de palabra(punto, coma, espacio, punto y coma)
    
        -ATAJOS NEGACION
            \W --> representa cualquier caracter NO alfanumerico (a-z A-Z 0-9 _)
            \D --> negacion de los digitos
            \S --> negacion de los espacios
     
        - CANTIDAD: Definir cuantas veces aparece ese caracter
            * --> lo que esta antes del asterisco (punto, corchete, los parentesis, caracter estatico)
                    puede estar, puede no estar, puede repetir...
            ? --> lo que esta antes del signo puede no estar, pero si aparece es UNA SOLA VEZ
            + --> lo que esta antes del signo tiene que estar una vez como minimo (se puede repetir eternamente)
            {num} --> lo que esta antes tiene que aparecer esa cantidad exacta de veces
            {num, otroNum} --> lo que esta antes tiene que aparecer entre esas cantidades (ambas inclusives)
            {num, } --> estamos definiendo un minimo, pero no un maximo, tiene que aparecer desde esa cantidad de veces
        
        -DELIMITADORES de INICIO O FIN DE ER
            ^--> Indica que antes de eso no puede haber nada...
            $--> Indica que despues de eso no puede haber nada...
    */

    onHandleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }

    render() {
        const { auth, authError } = this.props;
        const { noCarnetCorrecto, nombresCorrecto, apellidosCorrecto, correoCorrecto, noTelefonoCorrecto, confContrasenhaCorrecto } = this.state;

        if (auth.uid) {
            return (
                <Redirect to="/" />
            )
        }
        return (
            <div className="container">
                <div className="row">
                    <form onSubmit={this.onHandleSubmit} className="white">
                        <h5 className="grey-text text-darken-3" style={{textAlign:"center"}}>Registrarse</h5>
                        <div className="input-field">
                            <label htmlFor="correo">Correo Electrónico </label>
                            <input type="email" id="correo" onChange={this.onHandleChange}
                                required
                            />
                            {
                                correoCorrecto !== null &&
                                    !correoCorrecto ?
                                    <p style={{ color: 'red', textAlign: 'left' }}>Digite un correo válido</p> :
                                    null
                            }
                        </div>

                        <div className="input-field">
                            <label htmlFor="contrasenha">Contraseña</label>
                            <input type="password" id="contrasenha" onChange={this.onHandleChange}
                                required
                            />
                        </div>

                        <div className="input-field">
                            <label htmlFor="confContrasenha">Confirmar Contraseña</label>
                            <input type="password" id="confContrasenha" onChange={this.onHandleChange}
                                required
                            />
                            {
                                confContrasenhaCorrecto !== null &&
                                    !confContrasenhaCorrecto ?
                                    <p style={{ color: 'red', textAlign: 'left' }}>Las contraseñas no coinciden</p> :
                                    null
                            }
                        </div>

                        <div className="input-field">
                            <label htmlFor="nombres">Nombres</label>
                            <input type="text" id="nombres" onChange={this.onHandleChange}
                                required
                            />
                            {
                                nombresCorrecto !== null &&
                                    !nombresCorrecto ?
                                    <p style={{ color: 'red', textAlign: 'left' }}>Digite su(s) nombre(s) correctamente</p> :
                                    null
                            }
                        </div>

                        <div className="input-field">
                            <label htmlFor="apellidos">Apellidos</label>
                            <input type="text" id="apellidos" onChange={this.onHandleChange}
                                required
                            />
                            {
                                apellidosCorrecto !== null &&
                                    !apellidosCorrecto ?
                                    <p style={{ color: 'red', textAlign: 'left' }}>Digite su(s) apellido(s) correctamente</p> :
                                    null
                            }
                        </div>

                        <div className="input-field">
                            <label htmlFor="noCarnet">Número de Carnet</label>
                            <input type="text" id="noCarnet" onChange={this.onHandleChange}
                                required
                            />
                            {
                                noCarnetCorrecto !== null &&
                                    !noCarnetCorrecto ?
                                    <p style={{ color: 'red', textAlign: 'left' }}>Carnet No Valido. Ejemplo de carnet: 2020-1000U</p> :
                                    null
                            }
                        </div>

                        <div className="input-field">
                            <label htmlFor="noTelefono">Número de Teléfono</label>
                            <input type="text" id="noTelefono" onChange={this.onHandleChange}
                                required
                            />
                            {
                                noTelefonoCorrecto !== null &&
                                    !noTelefonoCorrecto ?
                                    <p style={{ color: 'red', textAlign: 'left' }}>Telefono no válido. Ejemplo de teléfono: 7987-6543</p> :
                                    null
                            }
                        </div>

                        <div className="input-field" style={{textAlign:"center"}}>
                            <button className="btn pink ligthen-1 z-depth-0" >
                                REGISTRARSE
                        </button>
                        </div>
                        {
                            authError ?
                                <p style={{ color: 'red', textAlign: 'center' }}>{authError}</p> :
                                null
                        }

                    </form>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        auth: state.firebase.auth,
        authError: state.auth.authError
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        signUp: (nuevoUsuario) => dispatch(signUp(nuevoUsuario))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignIn)