import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyBS4bOTafwynBG74qTXPA3qXCQqmJ0RCBo",
    authDomain: "tinder-clone-78cbd.firebaseapp.com",
    databaseURL: "https://tinder-clone-78cbd.firebaseio.com",
    projectId: "tinder-clone-78cbd",
    storageBucket: "tinder-clone-78cbd.appspot.com",
    messagingSenderId: "623625505882",
    appId: "1:623625505882:web:b1b555fc20cc1285e95c63",
    measurementId: "G-BZ9F81F3TR"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const database = firebaseApp.firestore();


  export default database;