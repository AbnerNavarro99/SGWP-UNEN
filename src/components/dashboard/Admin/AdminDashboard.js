import React, { Component } from 'react';
import "./AdminDashboard.css";
import SideBar from './SideBar';
import M from 'materialize-css/dist/js/materialize.min.js';
import ResumenParalelos from '../../paralelos/Admin/AdminListaParalelos';
import { connect } from 'react-redux';
import ListaPagos from '../../pagos/ListaPagos';
import { Redirect } from 'react-router-dom';
import AdminHome from "./AdminHome";

class AdminResume extends Component {
    componentDidMount = () => {
        let sidenav = document.querySelector('#menu-side');
        M.Sidenav.init(sidenav, {});
    }

    render() {
        const { id } = this.props;
        let ComponenteAMostrar;
        switch (id) {
            case "pagos":
                ComponenteAMostrar = <ListaPagos />;
                break;
            case "resumen":
                ComponenteAMostrar = <ResumenParalelos />;
                break;
            case "home":
                ComponenteAMostrar = <AdminHome />;
                break;
            default:
                return <Redirect to="/admin/home" />
        }
        return (
            <div className="section adminDashboard">
                <div className="row RowSideNav">
                    <div className="col s12">
                        <a href="/admin/home" className="sidenav-trigger menuIcon" data-target="menu-side">
                            <i className="material-icons">menu</i>
                        </a>
                    </div>
                </div>
                <div className="row">
                    <SideBar />
                    <div className="col s12 align-center">
                        <div className="adminLayout">
                            <div className="row align-center">
                                <div className="col s12 componenteAMostrar">
                                    {ComponenteAMostrar}
                                </div>
                            </div>
                            {/* <div className="row">

                            </div> */}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    const id = ownProps.match.params.id;
    console.log(id);
    return {
        id
    }
}

export default connect(mapStateToProps)(AdminResume)