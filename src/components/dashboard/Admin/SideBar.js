import React from 'react';
import { connect } from 'react-redux';
const SideBar = ({ perfil }) => {
    return (
        <ul className="sidenav" id="menu-side">
            <li>
                <div className="user-view">
                    <div className="background">
                        <img src={perfil.background} alt="" />
                    </div>
                    <a href="#" className="circle">
                        <img src={perfil.image} alt="" />
                    </a>
                    <br />
                    <a href="#">
                        <span className="name white-text">{perfil.nombres} {perfil.apellidos}</span>
                    </a>
                    <a href="#">
                        <span className="email white-text">{perfil.correo}</span>
                    </a>
                </div>
            </li>
            <li>
                <a href="/admin/home">
                    <i className="material-icons">home</i>
                    <span>DashBoard</span>
                </a>
                <a href="/admin/resumen">
                    <i className="material-icons">book</i>
                    <span>Resumen</span>
                </a>
                <a href="/admin/pagos">
                    <i className="material-icons">attach_money</i>
                    <span>Pagos</span>
                </a>

            </li>
        </ul>
    )
}

const mapStateToProps = (state) => {
    return {
        perfil: state.firebase.profile
    }
}

export default connect(mapStateToProps)(SideBar);