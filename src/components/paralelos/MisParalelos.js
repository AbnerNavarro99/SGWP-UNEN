import React from 'react';
import ResumenMisParalelos from './ResumenMisParalelos';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

const MisParalelos = (props) => {
    const { auth, paralelos, usuarios, isAdmin} = props;
    if(isAdmin) return <Redirect to="/admin/dashboard" />
    const id = auth.uid;
    const miUsuario = usuarios ? usuarios[id] : null;
    const paralelosInscritos = miUsuario ? miUsuario.paralelosInscritos : null;
    let paralelosAMostrar = [];
    paralelos &&
        paralelos.forEach(p => {
            paralelosInscritos.forEach(pI => {
                if (p.id === pI) {
                    paralelosAMostrar = [...paralelosAMostrar, p];
                }
            });
        });
    return (
        <div className="lista-paralelos section">
            <h2 className="container section white-text">Veranos Inscritos</h2>
            {paralelosAMostrar &&
                paralelosAMostrar.map(paralelo => {
                    return (
                        <ResumenMisParalelos paralelo={paralelo} key={paralelo.id} paralelosInscritos={paralelosInscritos} />
                    )
                })
            }
        </div>
    )
}


const mapStateToProps = (state) => {
    return {
        auth: state.firebase.auth,
        usuarios: state.firestore.data.usuarios,
        paralelos: state.firestore.ordered.paralelosConvocados,
        isAdmin : state.firebase.profile.admin
    }
}

export default compose(connect(mapStateToProps),
    firestoreConnect([
        {
            collection: 'usuarios'
        }, {
            collection: 'paralelosConvocados'
        }
    ]))
    (MisParalelos)