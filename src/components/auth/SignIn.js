import React, { Component } from 'react'
import { connect } from 'react-redux'
import { signIn } from '../../store/actions/AuthActions';
import { Redirect } from 'react-router-dom';

class SignIn extends Component {

    state = {
        correo: '',
        contrasenha: ''
    }

    onHandleSubmit = (e) => {
        e.preventDefault();
        this.props.signIn(this.state);
    }

    onHandleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }

    render() {
        const { authError, auth, isAdmin } = this.props;
        if (auth.uid) {
            if (isAdmin) {
                return <Redirect to="/admin/dashboard" />
            }
            return (
                <Redirect to="/" />
            )
        }
        return (
            <div className="container" >
                <div className="row">
                    <div>
                        <form onSubmit={this.onHandleSubmit} className="white">
                            <h5 className="grey-text text-darken-3" style={{textAlign:"center"}}>Iniciar Sesión</h5>
                            <div className="input-field">
                                <label htmlFor="correo">Correo Electrónico </label>
                                <input type="email" id="correo" onChange={this.onHandleChange} required />
                            </div>

                            <div className="input-field">
                                <label htmlFor="contrasenha">Contraseña</label>
                                <input type="password" id="contrasenha" onChange={this.onHandleChange} required />
                            </div>


                            <div className="input-field" style={{textAlign:"center"}}>
                                <button className="btn pink ligthen-1 z-depth-0">
                                    ENTRAR
                        </button>
                            </div>

                            <div className="red-text center">
                                {
                                    authError &&
                                    <p>{authError}</p>
                                }
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        authError: state.auth.authError,
        auth: state.firebase.auth,
        isAdmin: state.firebase.profile.admin
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        signIn: (creds) => dispatch(signIn(creds))
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(SignIn)
