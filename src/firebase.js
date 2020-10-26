import firebase from "firebase"

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyC-uRkFFMbvGJB_kUz3RRvfs8DmSy7FF5I",
    authDomain: "fb-messenger-clone-33644.firebaseapp.com",
    databaseURL: "https://fb-messenger-clone-33644.firebaseio.com",
    projectId: "fb-messenger-clone-33644",
    storageBucket: "fb-messenger-clone-33644.appspot.com",
    messagingSenderId: "534462799659",
    appId: "1:534462799659:web:f16496510d7ef28ffcaf6e",
    measurementId: "G-K76T1RK2MY"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  
  export { db, auth };
