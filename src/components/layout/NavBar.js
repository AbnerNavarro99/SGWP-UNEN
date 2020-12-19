import React from 'react';
import { Link } from 'react-router-dom';
import SignedInLinks from './SignedInLinks';
import SignedOutLinks from './SignedOutLinks';
import { connect } from 'react-redux';
import './NavBar.css';

const NavBar = (props) => {
    const { auth } = props;
    return (
        <div class="navbar-fixed">

            <nav className="nav-wrapper blue darken-3 NavBar">
                <div className="container">
                    <Link to="/" className="brand-logo left"><img width="65px" src="https://firebasestorage.googleapis.com/v0/b/sistema-web-paralelos-unen.appspot.com/o/BRANDLOGO.jpg?alt=media&token=b4161213-1ff0-405f-9713-40aee79ed05f" alt="SGWP" /> </Link>
                    {
                        auth.uid ?
                            <SignedInLinks />
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