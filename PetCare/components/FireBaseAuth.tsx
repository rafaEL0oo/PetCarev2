import auth from '@react-native-firebase/auth';
import firebase from '@react-native-firebase/app';
// import db from "@react-native-firebase/database"
import firestore from '@react-native-firebase/firestore';



const config = {
    apiKey: "AIzaSyCsU-nr2BroJLH88HsL-QcSaKf3kMMLqtQ",
    authDomain: "firebase-adminsdk-bxqv7@petcare-da0d2.iam.gserviceaccount.com",
    projectId: "petcare-da0d2",
    storageBucket: "petcare-da0d2.appspot.com",
    messagingSenderId: "799144242076",
    appId: "1:799144242076:android:679ce795f817d20b887659",
    measurementId: "452898184",
    databaseURL:"https://petcare-da0d2-default-rtdb.firebaseio.com/",
  }

//   !firebase.apps.length ? firebase.initializeApp(config) : firebase.app()

export const FIREBASE_APP = firebase.initializeApp(config)
export const FIREBASE_AUTH = auth()
// export const FIREBASE_DB = db()
export const FIRESTORE_DB = firestore()