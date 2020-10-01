const initState = {
    pagos: [
    ]
}

const PagoReducer = (state = initState, action) => {
    switch (action.type) {
        case 'NUEVO_PAGO_EXITO':
            return {
                ...state,
                errorPago: null
            }
        case 'NUEVO_PAGO_ERROR':
            return {
                ...state,
                errorPago: action.err.message
            }
        case 'MODIFICAR_PAGO_EXITO':
            return {
                ...state,
                errorPago: null
            }
        case 'MODIFICAR_PAGO_ERROR':
            return {
                ...state,
                errorPago: action.err.message
            }
        default:
            return state;
    }
}


export default PagoReducer;