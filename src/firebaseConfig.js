import firebase from 'firebase'

var firebaseConfig = {
    apiKey: "AIzaSyBwgzQMybx689Ki1_pWpkh_GU1ne7vNCBg",
    authDomain: "todoapp-2cb00.firebaseapp.com",
    projectId: "todoapp-2cb00",
    storageBucket: "todoapp-2cb00.appspot.com",
    messagingSenderId: "867492074748",
    appId: "1:867492074748:web:561a844880b35659ed7379"
  };

  firebase.initializeApp(firebaseConfig);

  const db = firebase.firestore();

  export {db}