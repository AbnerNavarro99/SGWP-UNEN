const initState = {
    paralelos: [
    ]
}

const ParaleloReducer = (state = initState, action) => {
    switch (action.type) {
        case 'INSCRIBIR_PARALELO':
            return state;
        case 'INSCRIBIR_PARALELO_ERROR':
            return state;
        case 'ELIMINAR_INSCRIPCION':
            return state;
        case 'ELIMINAR_INSCRIPCION_ERROR':
            return state;
        case 'ANHADIR_PARALELO':
            return state;
        case 'ANHADIR_PARALELO_ERROR':
            return state;
        default:
            return state;
    }
}

export default ParaleloReducer;