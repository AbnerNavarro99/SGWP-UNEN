import RootReducer from './reducers/RootReducer'
import thunk from 'redux-thunk'
import { createStore, applyMiddleware,compose } from 'redux';
import { getFirestore, reduxFirestore } from 'redux-firestore';
import { getFirebase } from 'react-redux-firebase';
import fbConfig from './../config/FbConfig';

export default () => {
  return createStore(
    RootReducer, compose(
      applyMiddleware(thunk.withExtraArgument({ getFirestore, getFirebase })), // to add other middleware,
      reduxFirestore(fbConfig)
    )
  )
}