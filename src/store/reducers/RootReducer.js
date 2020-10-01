import AuthReducer from './AuthReducer';
import ParaleloReducer from './ParaleloReducer';
import PagoReducer from './PagoReducer';
import { combineReducers } from 'redux';
import { firestoreReducer } from 'redux-firestore';
import { firebaseReducer } from 'react-redux-firebase'

const RootReducer = combineReducers({
    auth : AuthReducer,
    pagos : PagoReducer,
    firestore: firestoreReducer,
    paralelo : ParaleloReducer,
    firebase : firebaseReducer
})

export default RootReducer;