import React, { Component } from 'react';
import ListaParalelos from './../paralelos/ListaParalelos';
import News from './News';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';
import { Redirect } from 'react-router-dom';
import { Link } from 'react-router-dom';
import HomePage from './HomePage';
import './Dashboard.css';
import EnMantenimiento from './../../Maintaince.png'
import { Button } from 'materialize-css';
import UNILOGO from './../../UNI_LOGO.png';
import GMAIL from './../../gmail.png';

class DashBoard extends Component {

    state = {
        FBPluginWidth: 240,
        FBPluginHeight: 500
    }


    componentDidMount = () => {
        const { auth } = this.props;
        // let height = document.getElementById("forallDevices").style.height;
        // IMPORTANTE DESCOMENTAR CUANDO SE HABILITE EL PANEL DEL USUARIO NUEVAMENTE
        if (auth.uid) {
            let width = document.getElementById("forallDevices").offsetWidth;

            this.setState({
                // FBPluginHeight: height,
                FBPluginWidth: width
            }
            );
        }
    }
    render() {
        const { paralelos, auth, isAdmin } = this.props;
        const { FBPluginHeight, FBPluginWidth } = this.state;
        if (!auth.uid) return <HomePage />
        if (isAdmin) return <Redirect to="/admin/dashboard" />

        return (
            <div>
                <div className="dashboard container"
                >

                    <div className="row">
                        <div className="col s12">
                            <h3 className="white-text">Veranos en Convocatoria</h3>
                        </div>
                    </div>
                    <div className="row"
                    >
                        <div className="col s12 l7">
                            <ListaParalelos paralelos={paralelos} />
                        </div>
                        <div className="col s12 l5" style={{ margin: '0', padding: '0' }}>
                            <div className="container-fluid">
                                <div className="row" style={{ margin: '0', padding: '0' }}>
                                    <div className="col s12" id="forallDevices" style={{ padding: '0' }}>
                                        <News width={FBPluginWidth} height="700" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row emptyblock">
                        <div className="col s12"></div>
                    </div>
                </div>

                <div className="container-fluid footer">
                    <div className="row" style={{ margin: '0', padding: '0' }}>
                        <div className="col s12 l3 offset-l1" style={{ padding: '0' }}>
                            <div className="section">
                                <div className="row" style={{ color: 'white' }}>
                                    <div className="col s10 offset-s1 l12">
                                        <h6 className="footerHeader">ACERCA DE NOSOTROS</h6>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col s10 offset-s1 l12">
                                        <p className="textAbout">La Asociación Nacional de Estudiantes de Ciencias y Sistemas somos un equipo que representa al gremio estudiantil de la carrera Ingeniería de Sistemas.</p>
                                    </div>
                                    <div className="col s11 l10 offset-s1">
                                        <a className="btn" target="_blank" href="https://www.facebook.com/groups/430222640394434">grupo en Facebook</a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col s12 l4" style={{ padding: '0' }}>
                            <div className="section">
                                <div className="row" style={{ color: 'white' }}>
                                    <div className="col s10 offset-s1">
                                        <h6 className="footerHeader">SITIO WEB UNI FCYS</h6>
                                    </div>
                                </div>

                                <div className="row">
                                    <div className="col s10 offset-s1">
                                        <a className="section" href="http://www.fcys.uni.edu.ni" target="_blank">
                                            <div className="row linkfcys">
                                                <div className="col s2">
                                                    <div className="backg-logoUniFcys">
                                                        <img src={UNILOGO} alt="" className="logoUniFcys valign-wrapper" />
                                                    </div>
                                                </div>
                                                <div className="col s7 offset-s2">
                                                    <span>Facultad de Ciencias y Sistemas</span>
                                                </div>
                                            </div>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>


                        <div className="col s12 l3" style={{ padding: '0,' }}>
                            <div className="section">
                                <div className="row" style={{ color: 'white' }}>
                                    <div className="col s10 offset-s1">
                                        <h6 className="footerHeader">CONECTACTE</h6>
                                    </div>
                                </div>

                                <div className="row">
                                    <div className="col s1 offset-s3">
                                        <a  href="https://chat.whatsapp.com/CN5X0hkipAFEh0EwR25BaN" target="_blank">
                                            <svg className="social-media" height="28px" viewBox="-1 0 512 512" width="28px" xmlns="http://www.w3.org/2000/svg"><path d="m10.894531 512c-2.875 0-5.671875-1.136719-7.746093-3.234375-2.734376-2.765625-3.789063-6.78125-2.761719-10.535156l33.285156-121.546875c-20.722656-37.472656-31.648437-79.863282-31.632813-122.894532.058594-139.941406 113.941407-253.789062 253.871094-253.789062 67.871094.0273438 131.644532 26.464844 179.578125 74.433594 47.925781 47.972656 74.308594 111.742187 74.289063 179.558594-.0625 139.945312-113.945313 253.800781-253.867188 253.800781 0 0-.105468 0-.109375 0-40.871093-.015625-81.390625-9.976563-117.46875-28.84375l-124.675781 32.695312c-.914062.238281-1.84375.355469-2.761719.355469zm0 0" fill="#e5e5e5" /><path d="m10.894531 501.105469 34.46875-125.871094c-21.261719-36.839844-32.445312-78.628906-32.429687-121.441406.054687-133.933594 109.046875-242.898438 242.976562-242.898438 64.992188.027344 125.996094 25.324219 171.871094 71.238281 45.871094 45.914063 71.125 106.945313 71.101562 171.855469-.058593 133.929688-109.066406 242.910157-242.972656 242.910157-.007812 0 .003906 0 0 0h-.105468c-40.664063-.015626-80.617188-10.214844-116.105469-29.570313zm134.769531-77.75 7.378907 4.371093c31 18.398438 66.542969 28.128907 102.789062 28.148438h.078125c111.304688 0 201.898438-90.578125 201.945313-201.902344.019531-53.949218-20.964844-104.679687-59.09375-142.839844-38.132813-38.160156-88.832031-59.1875-142.777344-59.210937-111.394531 0-201.984375 90.566406-202.027344 201.886719-.015625 38.148437 10.65625 75.296875 30.875 107.445312l4.804688 7.640625-20.40625 74.5zm0 0" fill="#fff" /><path d="m19.34375 492.625 33.277344-121.519531c-20.53125-35.5625-31.324219-75.910157-31.3125-117.234375.050781-129.296875 105.273437-234.488282 234.558594-234.488282 62.75.027344 121.644531 24.449219 165.921874 68.773438 44.289063 44.324219 68.664063 103.242188 68.640626 165.898438-.054688 129.300781-105.28125 234.503906-234.550782 234.503906-.011718 0 .003906 0 0 0h-.105468c-39.253907-.015625-77.828126-9.867188-112.085938-28.539063zm0 0" fill="#64b161" /><g fill="#fff"><path d="m10.894531 501.105469 34.46875-125.871094c-21.261719-36.839844-32.445312-78.628906-32.429687-121.441406.054687-133.933594 109.046875-242.898438 242.976562-242.898438 64.992188.027344 125.996094 25.324219 171.871094 71.238281 45.871094 45.914063 71.125 106.945313 71.101562 171.855469-.058593 133.929688-109.066406 242.910157-242.972656 242.910157-.007812 0 .003906 0 0 0h-.105468c-40.664063-.015626-80.617188-10.214844-116.105469-29.570313zm134.769531-77.75 7.378907 4.371093c31 18.398438 66.542969 28.128907 102.789062 28.148438h.078125c111.304688 0 201.898438-90.578125 201.945313-201.902344.019531-53.949218-20.964844-104.679687-59.09375-142.839844-38.132813-38.160156-88.832031-59.1875-142.777344-59.210937-111.394531 0-201.984375 90.566406-202.027344 201.886719-.015625 38.148437 10.65625 75.296875 30.875 107.445312l4.804688 7.640625-20.40625 74.5zm0 0" /><path d="m195.183594 152.246094c-4.546875-10.109375-9.335938-10.3125-13.664063-10.488282-3.539062-.152343-7.589843-.144531-11.632812-.144531-4.046875 0-10.625 1.523438-16.1875 7.597657-5.566407 6.074218-21.253907 20.761718-21.253907 50.632812 0 29.875 21.757813 58.738281 24.792969 62.792969 3.035157 4.050781 42 67.308593 103.707031 91.644531 51.285157 20.226562 61.71875 16.203125 72.851563 15.191406 11.132813-1.011718 35.917969-14.6875 40.976563-28.863281 5.0625-14.175781 5.0625-26.324219 3.542968-28.867187-1.519531-2.527344-5.566406-4.046876-11.636718-7.082032-6.070313-3.035156-35.917969-17.726562-41.484376-19.75-5.566406-2.027344-9.613281-3.035156-13.660156 3.042969-4.050781 6.070313-15.675781 19.742187-19.21875 23.789063-3.542968 4.058593-7.085937 4.566406-13.15625 1.527343-6.070312-3.042969-25.625-9.449219-48.820312-30.132812-18.046875-16.089844-30.234375-35.964844-33.777344-42.042969-3.539062-6.070312-.058594-9.070312 2.667969-12.386719 4.910156-5.972656 13.148437-16.710937 15.171875-20.757812 2.023437-4.054688 1.011718-7.597657-.503906-10.636719-1.519532-3.035156-13.320313-33.058594-18.714844-45.066406zm0 0" fillRule="evenodd" /></g></svg>
                                        </a>
                                    </div>
                                    <div className="col s1 offset-s2">
                                        <a href="https://www.facebook.com/ANECYS" target="_blank" rel="noopener noreferrer">
                                            <svg className="social-media" height="28px" viewBox="0 0 512 512" width="28px" xmlns="http://www.w3.org/2000/svg"><path d="m483.738281 0h-455.5c-15.597656.0078125-28.24218725 12.660156-28.238281 28.261719v455.5c.0078125 15.597656 12.660156 28.242187 28.261719 28.238281h455.476562c15.605469.003906 28.257813-12.644531 28.261719-28.25 0-.003906 0-.007812 0-.011719v-455.5c-.007812-15.597656-12.660156-28.24218725-28.261719-28.238281zm0 0" fill="#4267b2" /><path d="m353.5 512v-198h66.75l10-77.5h-76.75v-49.359375c0-22.386719 6.214844-37.640625 38.316406-37.640625h40.683594v-69.128906c-7.078125-.941406-31.363281-3.046875-59.621094-3.046875-59 0-99.378906 36-99.378906 102.140625v57.035156h-66.5v77.5h66.5v198zm0 0" fill="#fff" /></svg>
                                        </a>
                                    </div>
                                </div>

                                <div className="row">
                                    <div className="col s8 offset-s2">
                                        <div className="section">
                                            <div className="row">
                                                <div className="col s2">
                                                    <img className="social-media"  id="gmailLogo" src={GMAIL} alt="" width="28px" height="28px" />
                                                </div>
                                                <div className="col s8 offset-s1 gmailEmail">
                                                    <label htmlFor="gmailLogo">unenanecys2020@gmail.com</label>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col l1" >
                            <div className="container-fluid">
                            </div>
                        </div>
                        
                    </div>
                </div>
                <div className="container-fluid secondFooter">
                    <div className="row" style={{ margin: '0', padding: '0' }}>
                        <div className="col s12 l6 offset-l3">
                            <p style={{ color: 'white', fontStyle: 'italic' }}>© Copyright Abner Navarro - UNEN-ANECYS. Todos los derechos reservados.</p>
                        </div>
                    </div>
                </div>
                {/* <div className="container">
                    <div className="row">
                        <div className="col s12 m8 l8 white-text offset-l2 offset-m2">
                            <h1 style={{ textAlign: 'center' }} className="CambiarTamañoPantallaAPequeño">Sitio Web en Mantenimiento</h1>
                            <img src={EnMantenimiento} alt="" width="100%" />
                            <h3 style={{ textAlign: 'center' }} className="CambiarTamañoPantallaAPequeño">!Feliz semestre!</h3>
                        </div>
                    </div> 
                </div>*/}
            </div >
        );
    }
}

const mapStateToProps = (state) => {
    return {
        paralelos: state.firestore.ordered.paralelosConvocados,
        auth: state.firebase.auth,
    }
}

export default compose(
    connect(mapStateToProps),
    firestoreConnect([
        {
            collection: 'paralelosConvocados'
        }
    ])
)(DashBoard);