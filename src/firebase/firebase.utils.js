import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";

const config = {
  apiKey: "AIzaSyDaQTx8Sc5aKy1USSWVYEw0cHKenCwX-Gs",
  authDomain: "crwn-db-42184.firebaseapp.com",
  projectId: "crwn-db-42184",
  storageBucket: "crwn-db-42184.appspot.com",
  messagingSenderId: "680886301333",
  appId: "1:680886301333:web:7483c4ff25f113570ea19c",
  measurementId: "G-11S5G130L7",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: "select_account"});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
