import firebase from 'firebase';


const firebaseConfig = {
  apiKey: "AIzaSyCcoegQS3yCA2x4xjza4rpAy6DLXCcQ3Gw",

  authDomain: "uon-environment-club.firebaseapp.com",

  projectId: "uon-environment-club",

  storageBucket: "uon-environment-club.appspot.com",

  messagingSenderId: "149113389386",

  appId: "1:149113389386:web:96deec1f3844e062ca01b3",

  measurementId: "G-QKHS3EL29Z"

  
  };
  const firebaseSApp = firebase.initializeApp(firebaseConfig);
  const auth = firebase.auth();
   const db = firebaseSApp.firestore();
   const googleProvider = new firebase.auth.GoogleAuthProvider();
   const facebookProvider = new firebase.auth.FacebookAuthProvider();
   const TwitterProvider = new firebase.auth.TwitterAuthProvider();
   const GithubProvider = new firebase.auth.GithubAuthProvider();
   const storage = firebase.storage();
  export default {auth, db, storage};
  export  {db, googleProvider, facebookProvider, TwitterProvider,GithubProvider};
  export  {auth};
  export  {storage};