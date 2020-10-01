import React from 'react';
import { NavLink } from 'react-router-dom';

const SignedOutLinks = () =>{
    return(
        <ul className="right">
            <li><NavLink to="/registrarse">Registrarse</NavLink></li>
            <li><NavLink to="/entrar">Iniciar Sesión</NavLink></li>
        </ul>
    );
}

export default SignedOutLinks;