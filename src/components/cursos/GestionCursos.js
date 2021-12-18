import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import './GestionCursos.css'


class GestionCursos extends Component {
    render() {

        return (
            <div className="container-fluid GestionCursos">
            <div className="row">
            <Link to={"nuevo-curso"} className="black-text">
                <div className="col s12 m4 offset-m2">
                    <div className="container-fluid Gestionar" id="NuevoCurso">
                        <div className="row valign-wrapper alinearVertical">
                            <div className="col s3 offset-s1 ">
                                <i className="large material-icons" id="iconAdd">add_box</i>
                            </div>
                            <div className="col s7 Titulo">
                                <h4>Nuevo Curso de Verano</h4>
                            </div>
                        </div>
                    </div>
                </div>
            </Link>

                <Link to={"lista-cursos"} className="white-text">
                    <div className="col s12 m4 white-text">
                        <div className="container-fluid Gestionar" id="ListaCursos">
                            <div className="row valign-wrapper alinearVertical">
                                <div className="col s3 offset-s1">
                                    <i className="large material-icons" id="iconAdd">assignment</i>
                                </div>
                                <div className="col s7 Titulo">
                                    <h4>Lista Cursos Activos</h4>
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

export default GestionCursos;
