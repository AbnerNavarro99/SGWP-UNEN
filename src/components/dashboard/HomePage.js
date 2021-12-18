import React, { Component } from 'react';
import './HomePage.css';
import LOGOANECYS from './../../ANECYSLOGO2.png';
import LOGOUNEN from './../../UNENLOGO2.png';
import EnMantenimiento from './../../Maintaince.png'
import { Button } from 'react-materialize';

class HomePage extends Component {
    render() {
        return (
            <div className="container HomePage">
                <div className="row">
                    <div className="col s12 m6 unenLogos">
                        <div className="content-panel">
                            <div className="row">
                                <div className="col s6 m12 logo">
                                    <div className="logoImg">
                                        <img src="https://firebasestorage.googleapis.com/v0/b/sistema-web-paralelos-unen.appspot.com/o/ANECYSLOGO2.png?alt=media&token=73b82941-d627-46ed-9a8d-a4f016c84951" id="logoANECYS" alt="LOGO ANECYS" />
                                    </div>
                                </div>
                                <div className="col s6 m12 logo">
                                    <div className="logoImg">
                                        <img src="https://firebasestorage.googleapis.com/v0/b/sistema-web-paralelos-unen.appspot.com/o/UNENLOGO2.png?alt=media&token=9b4b9f6f-1106-41ac-a385-b055bda6cfaa" id="logoUNEN" alt="LOGO UNEN" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col s12 m6 Entrar">
                        <div className="content-panel">
                            <div className="EntrarDiv white-text">
                                <div className="row IniciarSesion">
                                    <div className="col s12">
                                        <p>¿De vuelta al sitio?</p>
                                        
                                        <a href="/entrar">
                                            <Button
                                                className="botonRegistrarse"
                                                node="button"
                                                style={{
                                                    marginRight: '5px'
                                                }}
                                                waves="light"
                                            >
                                                Iniciar Sesión
                                            </Button>

                                        </a>
                                    </div>
                                </div>
                                <div className="row Registrarse">
                                    <div className="col s12">
                                        <p>¿Nuevo aquí?</p>

                                        <a href="/registrarse">
                                            <Button
                                                className="botonRegistrarse"
                                                node="button"
                                                style={{
                                                    marginRight: '5px'
                                                }}
                                                waves="light"
                                            >
                                                Registrarse
                                            </Button>

                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col s12 m8 l8 white-text offset-l2 offset-m2">
                        {/* <h1 style={{textAlign : 'center'}} className="CambiarTamañoPantallaAPequeño">Sitio Web en Mantenimiento</h1> */}
                        <img src="https://firebasestorage.googleapis.com/v0/b/sistema-web-paralelos-unen.appspot.com/o/NoBgLogoOriginal.png?alt=media&token=690cefa9-a6f4-4ccc-aa9b-fd281155f773" alt="" width="20%" style={{marginLeft : '40%'}}/>
                        <h3 style={{textAlign : 'center'}} className="CambiarTamañoPantallaAPequeño">Sistema de Gestión Web <br /> Cursos Nodales</h3>
                    </div> 
            </div >
        );
    }
}

export default HomePage;