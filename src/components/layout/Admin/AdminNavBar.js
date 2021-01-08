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
                    <Link to="/admin/home" className="brand-logo left"><img width="65px" src={brandlogo} alt="SGWP" /> </Link>
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