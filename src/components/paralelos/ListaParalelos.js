import React from 'react';
import ResumenParalelo from './ResumenParalelo';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';
import { connect } from 'react-redux';

const ListaParalelos = (props) => {
    const { auth, paralelos, usuarios } = props;
    const id = auth.uid;
    const miUsuario = usuarios ? usuarios[id] : null;
    const paralelosInscritos = miUsuario ? miUsuario.paralelosInscritos : null;
    return (
        <div className="lista-paralelos">
            {paralelos &&
                paralelos.map(paralelo => {
                    return (
                        <ResumenParalelo paralelo={paralelo} paralelosInscritos={paralelosInscritos} key={paralelo.id} />
                    )
                })
            }
        </div>
    )
}


const mapStateToProps = (state, ownProps) => {
    return {
        auth: state.firebase.auth,
        usuarios: state.firestore.data.usuarios
    }
}

export default compose(connect(mapStateToProps),
    firestoreConnect([
        {
            collection: 'usuarios'
        }
    ]))
    (ListaParalelos)