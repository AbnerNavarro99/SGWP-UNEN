import React, { Component } from 'react';
import "./AdminDashboard.css";
import SideBar from './SideBar';
import M from 'materialize-css/dist/js/materialize.min.js';
import AdminListaParalelos from '../../paralelos/Admin/AdminListaParalelos';
import { connect } from 'react-redux';
import ListaPagos from './../../pagos/ListaPagos';
import { Redirect } from 'react-router-dom';

class DashBoard extends Component {
    componentDidMount = () => {
        let sidenav = document.querySelector('#menu-side');
        M.Sidenav.init(sidenav, {});
    }

    render() {
        const { id } = this.props;
        let ComponenteAMostrar;
        switch (id) {
            case "pagos":
                ComponenteAMostrar = <ListaPagos />
                break;
            case "dashboard":
                ComponenteAMostrar = <AdminListaParalelos />
                break;
            default:
                return <Redirect to="/" />
        }
        return (
            <div className="section adminDashboard">
                <div className="row">
                    <div className="col s12">
                        <a href="#" className="sidenav-trigger" data-target="menu-side">
                            <i className="material-icons">menu</i>
                        </a>
                    </div>
                </div>
                <div className="row">
                    <SideBar />
                    <div className="col s12 align-center">
                        <div className="mainLayout">
                            <div className="row align-center">
                                <div className="col s12">
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
    return {
        id
    }
}

export default connect(mapStateToProps)(DashBoard)