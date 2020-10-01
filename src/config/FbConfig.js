import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

//Initialize Firebase
export const firebaseConfig = {
    apiKey: "AIzaSyC2HPi3bj0ssKTpMyqBb4XMN0IZBnOX-gk",
    authDomain: "sistema-web-paralelos-unen.firebaseapp.com",
    databaseURL: "https://sistema-web-paralelos-unen.firebaseio.com",
    projectId: "sistema-web-paralelos-unen",
    storageBucket: "sistema-web-paralelos-unen.appspot.com",
    messagingSenderId: "542541515868",
    appId: "1:542541515868:web:2fe2af522812f0ec9c2a99",
    measurementId: "G-KTHBHJKKY1"
};

firebase.initializeApp(firebaseConfig);
firebase.firestore().settings({timestampsInSnapshots: true});
export default firebase; 