
export const InscribirParalelo = (idParalelo) => {
    return (dispatch, getState, { getFirebase, getFirestore }) => {
        //make async call to DB
        const firestore = getFirestore();
        const state = getState();
        const uid = state.firebase.auth.uid;

        var docUsuarioX = firestore.collection('usuarios').doc(uid);

        // Atomically add a new region to the "regions" array field.

        docUsuarioX.update({
            paralelosInscritos: firestore.FieldValue.arrayUnion(idParalelo)
        }).then(() => {
            dispatch({
                type: 'INSCRIBIR_PARALELO', idParalelo
            })
        }).catch((err) => {
            dispatch({
                type: 'INSCRIBIR_PARALELO_ERROR', err
            })
        })

        let paralelos = state.firestore.data.paralelosConvocados;
        let paralelo = paralelos ? paralelos[idParalelo] : null;
        if (paralelo) {
            let costoTotal = paralelo.costoTotal;
            let cantidadInscritos = paralelo.cantidadInscritos + 1;
            firestore.collection('paralelosConvocados').doc(idParalelo).set({
                cantidadInscritos,
                costoxEstudiante: Math.ceil(costoTotal / cantidadInscritos)
            }, { merge: true });
        }
    }
}

export const EliminarInscripcion = (idParalelo) => {
    return (dispatch, getState, { getFirebase, getFirestore }) => {
        //make async call to DB
        const firestore = getFirestore();
        const state = getState();
        const uid = state.firebase.auth.uid;

        var docUsuarioX = firestore.collection('usuarios').doc(uid);

        docUsuarioX.update({
            paralelosInscritos: firestore.FieldValue.arrayRemove(idParalelo)
        }).then(() => {
            dispatch({
                type: 'ELIMINAR_INSCRIPCION', idParalelo
            })
        }).catch((err) => {
            dispatch({
                type: 'ELIMINAR_INSCRIPCION_ERROR', err
            })
        })

        let paralelos = state.firestore.data.paralelosConvocados;
        let paralelo = paralelos ? paralelos[idParalelo] : null;
        if (paralelo) {
            let costoTotal = paralelo.costoTotal;
            let cantidadInscritos = paralelo.cantidadInscritos - 1;
            let costoxEstudiante = 0;
            cantidadInscritos = cantidadInscritos < 1 ? 0 : cantidadInscritos;
            if (cantidadInscritos > 0)
                costoxEstudiante = costoTotal / cantidadInscritos;
            firestore.collection('paralelosConvocados').doc(idParalelo).set({
                cantidadInscritos,
                costoxEstudiante: Math.ceil(costoxEstudiante)
            },
                { merge: true });
        }
        

    }
}

export const AnhadirParalelo = (paralelo) => {
    return (dispatch, getState, { getFirebase, getFirestore }) => {
        //make async call to DB
        dispatch({
            type: 'ANHADIR_PARALELO', paralelo
        })
    }
}
