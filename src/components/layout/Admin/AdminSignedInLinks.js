import React from 'react';
import { NavLink } from 'react-router-dom';
import {signOut} from '../../../store/actions/AuthActions';
import { connect } from 'react-redux'

const AdminSignedInLinks = (props) =>{
    const {perfil} = props;
    return(
        <ul className="right">
            <li><a href="/" onClick={props.signOut}>Cerrar Sesión</a></li>
            <li><NavLink to="/" className="btn btn-floating pink ligthen-1">{perfil.iniciales}</NavLink></li>
        </ul>
    );
}

const mapDispatchToProps = (dispatch) =>{
    return {
        signOut : () => dispatch(signOut())
    }
}

const mapStateToProps = (state) =>{
    return{
        perfil : state.firebase.profile
    }
}


export default connect(mapStateToProps,mapDispatchToProps)(AdminSignedInLinks);