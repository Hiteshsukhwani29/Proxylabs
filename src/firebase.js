// Import the functions you need from the SDKs you need
import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAMNEchJXFiCCFOKLf3DBDzzA6YeWLwSeo",
  authDomain: "proxylabs-webapp.firebaseapp.com",
  projectId: "proxylabs-webapp",
  databaseURL: "https://proxylabs-webapp-default-rtdb.firebaseio.com",
  storageBucket: "proxylabs-webapp.appspot.com",
  messagingSenderId: "458558634127",
  appId: "1:458558634127:web:a9a922e5e70430cdbc58fa",
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
const db = app.firestore();
export const auth = app.auth();

export default db;
