import React, { Component } from 'react'
import './ListaCursos.css';
import CursoActivo from './CursoActivo';
import { compose } from 'redux'
import { firestoreConnect } from 'react-redux-firebase'
import { connect } from 'react-redux';
import M from 'materialize-css/dist/js/materialize.min.js';
import SideBar from './../dashboard/Admin/SideBar';

class ListaCursos extends Component {

    componentDidMount = () => {
        let sidenav = document.querySelector('#menu-side');
        M.Sidenav.init(sidenav, {});
    }

    render() {
        const { paralelosData } = this.props;
        console.log(paralelosData)
        return (

            <div className="container CursosActivos" style={{ textAlign: "center" }}>
                <div className="row RowSideNav">
                    <div className="col s12">
                        <a href="#" className="sidenav-trigger menuIcon" data-target="menu-side">
                            <i className="material-icons">menu</i>
                        </a>
                    </div>
                </div>
                <SideBar />

                <div className="row CursosActivosTitle">
                    <div className="col s12">
                        <h1>Cursos Activos</h1>
                    </div>
                </div>
                <div className="row lista-cursos">
                    {
                        paralelosData &&
                        paralelosData.map((p) => {
                            return (
                                <CursoActivo curso={p} />
                            )
                        })
                    }
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        paralelosData: state.firestore.ordered.paralelosConvocados
    }
}

export default compose(connect(mapStateToProps, null),
    firestoreConnect([

        {
            collection: 'paralelosConvocados'
        }
    ])
)(ListaCursos)
