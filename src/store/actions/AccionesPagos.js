export const NuevoPago = (pago) => {
    return (dispatch, getState, { getFirebase, getFirestore }) => {
        const state = getState();
        const firestore = getFirestore();
        const uid = state.firebase.auth.uid;
        let cantidadPagosHistorial = 0;
        // firestore.collection("pagos").doc("cantidadPagos").get().subscribe(doc => {
        //     console.log(doc.cantidad);
        // })

        var cantidadPagosQuery = getFirestore().collection('pagos').doc('cantidadPagos');
        var getDoc = cantidadPagosQuery
            .get()
            .then(doc => {
                if (doc.exists) {
                    cantidadPagosHistorial = doc.data().cantidad + 1;
                    let No = '';
                    if (cantidadPagosHistorial < 10) {
                        No = "000" + cantidadPagosHistorial
                    } else if (cantidadPagosHistorial >= 10 && cantidadPagosHistorial < 100) {
                        No = "00" + cantidadPagosHistorial
                    } else if (cantidadPagosHistorial >= 100 && cantidadPagosHistorial < 1000) {
                        No = "0" + cantidadPagosHistorial
                    }

                    getFirestore()
                        .collection('pagos').doc(No)
                        .set({
                            No,
                            deuda: pago.deuda,
                            reembolso: pago.reembolso,
                            montoPagado: pago.montoPagado,
                            estado: pago.estado,
                            fecha: pago.fecha,
                            paralelo: pago.paralelo,
                            usuario: pago.usuario.nombres + " " + pago.usuario.apellidos
                        }).then(() => {
                            dispatch({
                                type: 'NUEVO_PAGO_EXITO',
                                pago
                            });
                            var cantidadPagos = firestore.collection('pagos').doc('cantidadPagos');

                            // Atomically add a new region to the "regions" array field.

                            cantidadPagos.update({
                                cantidad: firestore.FieldValue.increment(1)
                            }).then(() => {
                                console.log("Se aumentó la cantidad en pagos")
                            }).catch((err) => {
                                console.log(err.mesage)
                            })

                        }).catch((err) => {
                            dispatch({
                                type: 'NUEVO_PAGO_ERROR',
                                err
                            });
                            console.log(err)
                        })
                }
            })
            .catch(err => {
                console.log('Error getting document', err);
            });
    }
}

export const LiquidarPago = (idPago, montoPagado) => {
    return (dispatch, getState, { getFirebase, getFirestore }) => {
        const firestore = getFirestore();
        firestore.collection('pagos').doc(idPago).update({
            montoPagado: montoPagado,
            deuda: 0,
            reembolso: 0
        }).then(() => {
            dispatch({
                type: 'MODIFICAR_PAGO_EXITO',
                idPago
            });
            alert("Deuda o Reembolso liquidado con Éxito.");
        }).catch(err => {
            dispatch({
                type: 'MODIFICAR_PAGO_ERROR',
                err
            });
            alert("Deuda o Reembolso liquidado sin Éxito.");
        })
    }
}