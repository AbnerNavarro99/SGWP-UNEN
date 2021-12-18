import React from 'react';
import { Link } from 'react-router-dom';
import AdminSignedInLinks from './AdminSignedInLinks';
import SignedOutLinks from '../SignedOutLinks';
import { connect } from 'react-redux';
import brandlogo from './../../../BRANDLOGO.jpg';
import './../NavBar.css';

const NavBar = (props) => {
    const { auth } = props;

    return (
        <div className="navbar-fixed">
            <nav className="nav-wrapper blue darken-1 NavBar">
                <div className="container">
                    <Link to="/admin/home" className="brand-logo left"><img width="65px" src="https://firebasestorage.googleapis.com/v0/b/sistema-web-paralelos-unen.appspot.com/o/NoBgLogoOriginal.png?alt=media&token=690cefa9-a6f4-4ccc-aa9b-fd281155f773" alt="SGWP" /> </Link>
                    {
                        auth.uid ?
                            <AdminSignedInLinks />
                            :
                            <SignedOutLinks />
                    }
                </div>
            </nav>
        </div>
    );
}

const mapStateToProps = (state) => {
    return {
        auth: state.firebase.auth
    }
}

export default connect(mapStateToProps)(NavBar);