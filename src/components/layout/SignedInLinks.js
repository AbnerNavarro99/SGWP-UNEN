import React from 'react';
import { NavLink } from 'react-router-dom';
import {signOut} from '../../store/actions/AuthActions';
import { connect } from 'react-redux'

const SignedInLinks = (props) =>{
    const {perfil, auth, usuarios} = props;
    const id = auth.uid;
    const miUsuario = usuarios ? usuarios[id] : null;
    const paralelosInscritos = miUsuario ? miUsuario.paralelosInscritos : null;
    return(
        <ul className="right">
            <li><NavLink className="inscritosLI" to="/mis-paralelos"><i class="small material-icons">shopping_cart_checkout</i><span class="new badge">{paralelosInscritos ? paralelosInscritos.length: 0}</span></NavLink></li>
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
        auth: state.firebase.auth,
        perfil : state.firebase.profile,
        usuarios: state.firestore.data.usuarios
    }
}


export default connect(mapStateToProps,mapDispatchToProps)(SignedInLinks);