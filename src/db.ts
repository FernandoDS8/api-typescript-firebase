import firebase from "firebase/compat/app";
//import initializeApp from "firebase/compat/app"
import 'firebase/compat/firestore'
import config from "./config"

const db = firebase.initializeApp(config.firebaseConfig);

export default db;