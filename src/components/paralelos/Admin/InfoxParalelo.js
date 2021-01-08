import React, { Component } from 'react'
import { compose } from 'redux';
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import SideBar from './../../dashboard/Admin/SideBar';
import './InfoxParalelo.css'
import M from 'materialize-css/dist/js/materialize.min.js';
import UsuariosxParalelo from './UsuariosxParalelo';

class InfoxParalelo extends Component {

    componentDidMount = () => {
        let sidenav = document.querySelector('#menu-side');
        M.Sidenav.init(sidenav, {});

    }

    render() {
        const { usuarios, id, paralelo, pagos } = this.props;
        let usuariosEnParalelo = [];
        usuarios && id && pagos &&
            usuarios.forEach(user => {
                if(user.paralelosInscritos)
                if (user.paralelosInscritos.includes(id)) {
                    usuariosEnParalelo = [...usuariosEnParalelo, user];
                }
            });
        let ComponenteAMostrar;
        return (
            <div className="section adminInfoxParalelo">
                <div className="row RowSideNav">
                    <div className="col s12">
                        <a href="#" className="sidenav-trigger menuIcon" data-target="menu-side">
                            <i className="material-icons">menu</i>
                        </a>
                    </div>
                </div>
                <div className="row">
                    <SideBar />
                    <div className="col s12 align-center">
                        <div className="row mainLayout">
                            <div className="col s12">
                                <div className="row lista-usuariosxParalelo">
                                    <div className="col s12">
                                        <h2 style={{ textAlign: 'center' }}>{paralelo && paralelo.nombreParalelo}</h2>
                                    </div>
                                    <div className="col s12">
                                        <UsuariosxParalelo pagos={pagos&&pagos} nombreParalelo={paralelo && paralelo.nombreParalelo} usuariosEnParalelo={usuariosEnParalelo && usuariosEnParalelo} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}


const mapStateToProps = (state, ownProps) => {
    const id = ownProps.match.params.id;
    const paralelos = state.firestore.data.paralelosConvocados;
    const paralelo = paralelos ? paralelos[id] : null;
    return {
        id,
        paralelo,
        auth: state.firebase.auth,
        usuarios: state.firestore.ordered.usuarios,
        pagos: state.firestore.ordered.pagos
    }
}


export default compose(connect(mapStateToProps),
    firestoreConnect([
        {
            collection: 'usuarios'
        },
        {
            collection: 'paralelosConvocados'
        },
        {
            collection : 'pagos'
        }
    ]))
    (InfoxParalelo)
