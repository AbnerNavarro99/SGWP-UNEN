import React, { Component } from 'react';
import './AdminHome.css';
import { Link } from 'react-router-dom';

export default class AdminHome extends Component {
    render() {
        return (
            <div className="container-fluid">
                <div className="row">
                    <Link to={"/admin/resumen/"} className="white-text">
                        <div className="col s12 m4 offset-m2">
                            <div className="container-fluid Gestionar" id="GestionResumen">
                                <div className="row valign-wrapper alinearVertical">
                                    <div className="col s3 offset-s1 ">
                                        <i className="large material-icons" id="iconAdd">book</i>
                                    </div>
                                    <div className="col s7">
                                        <h4>Resumen Inscritos</h4>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Link>
                    <Link to={"/admin/home/gestion-cursos/"} className="white-text">
                        <div className="col s12 m4">
                            <div className="container-fluid Gestionar" id="GestionCursos">
                                <div className="row valign-wrapper alinearVertical">
                                    <div className="col s3 offset-s1 ">
                                        <i className="large material-icons" id="iconAdd">bookmark</i>
                                    </div>
                                    <div className="col s7">
                                        <h4>Gestionar Cursos</h4>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Link>
                    <Link to={"/admin/home/users/"} className="black-text">
                        <div className="col s12 m4 offset-m2">
                            <div className="container-fluid Gestionar">
                                <div className="row valign-wrapper alinearVertical">
                                    <div className="col s3 offset-s1 ">
                                        <i className="large material-icons" id="iconAdd">account_box</i>
                                    </div>
                                    <div className="col s7">
                                        <h4>Gestionar Usuarios</h4>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Link>


                    <Link to={"/admin/pagos/"} className="white-text">
                        <div className="col s12 m4">
                            <div className="container-fluid Gestionar" id="GestionPagos">
                                <div className="row valign-wrapper alinearVertical">
                                    <div className="col s3 offset-s1 ">
                                        <i className="large material-icons" id="iconAdd">attach_money</i>
                                    </div>
                                    <div className="col s7">
                                        <h4>Gestionar Pagos</h4>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Link>

                </div>
            </div>
        )
    }
}
