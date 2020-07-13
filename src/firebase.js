import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyCCGZeWVmRFntadApe_gyZznw6J1S2D3I8",
  authDomain: "facebook-messenger-clone-1a1d0.firebaseapp.com",
  databaseURL: "https://facebook-messenger-clone-1a1d0.firebaseio.com",
  projectId: "facebook-messenger-clone-1a1d0",
  storageBucket: "facebook-messenger-clone-1a1d0.appspot.com",
  messagingSenderId: "808234764678",
  appId: "1:808234764678:web:813209d307b43135800407",
  measurementId: "G-35LL3X8T22",
});

const db = firebaseApp.firestore();

export default db;
