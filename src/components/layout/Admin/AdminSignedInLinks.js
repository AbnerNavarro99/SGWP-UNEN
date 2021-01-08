import React, { Component } from 'react'
import { NavLink } from 'react-router-dom';
import { signOut } from '../../../store/actions/AuthActions';
import { connect } from 'react-redux';

class AdminSignedInLinks extends Component {

    render() {
        const { perfil } = this.props;

        return (
            <ul className="right">
                <li><a href="/" onClick={this.props.signOut}>Cerrar Sesión</a></li>
                <li><a className="btn btn-floating pink ligthen-1">{perfil.iniciales}</a></li>
            </ul>
        );
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        signOut: () => dispatch(signOut())
    }
}

const mapStateToProps = (state) => {
    return {
        perfil: state.firebase.profile
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(AdminSignedInLinks);