import * as firebase from 'firebase';
const firebaseConfig = {
    apiKey: "AIzaSyDXwuRfXstZhGw4auUgJAPqNd-j0-GFxtQ",
    authDomain: "expensify-9f155.firebaseapp.com",
    databaseURL: "https://expensify-9f155.firebaseio.com",
    projectId: "expensify-9f155",
    storageBucket: "",
    messagingSenderId: "335077993789",
    appId: "1:335077993789:web:9c8716be83390d1b59a954",
    measurementId: "G-GNF7W0C01S"
  };
firebase.initializeApp(firebaseConfig);

const database=firebase.database();
const googleAuthProvider=new firebase.auth.GoogleAuthProvider();
export {firebase,googleAuthProvider,database as default} 







