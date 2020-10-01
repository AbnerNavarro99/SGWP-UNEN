import React, { Component } from 'react';
import ListaParalelos from './../paralelos/ListaParalelos';
// import News from './News';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';
import {Redirect} from 'react-router-dom';
import HomePage from './HomePage';

class DashBoard extends Component {
    render() {
        const { paralelos, auth, isAdmin} = this.props;
        if (!auth.uid) return <HomePage />
        if(isAdmin) return <Redirect to="/admin/dashboard" />

        return (
            <div className="dashboard container">
                <div className="row">
                    <div className="col s12 m8 align-left">
                        <h3 className="white-text">Paralelos en Convocatoria</h3>
                        <ListaParalelos paralelos={paralelos} />
                    </div>
                    {/* <div className="col s12 m3 offset-m1">
                        <News />
                    </div> */}
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        paralelos: state.firestore.ordered.paralelosConvocados,
        auth: state.firebase.auth,
    }
}

export default compose(
    connect(mapStateToProps),
    firestoreConnect([
        {
            collection: 'paralelosConvocados'
        }
    ])
)(DashBoard);