import firebase from 'firebase/compat/app'
import 'firebase/compat/firestore';
import 'firebase/compat/auth';



const firebaseConfig = {
  apiKey: "AIzaSyATHwwolFvKvkQ1rqg10tcl3ses_axGCEY",
  authDomain: "test-b81ee.firebaseapp.com",
  projectId: "test-b81ee",
  storageBucket: "test-b81ee.appspot.com",
  messagingSenderId: "691474220532",
  appId: "1:691474220532:web:9885ee9ed9146be8fde5a1"
};

firebase.initializeApp(firebaseConfig)
const projectAuth = firebase.auth()
const projectFirestore = firebase.firestore()
const timestamp = firebase.firestore.FieldValue.serverTimestamp

export {projectAuth,projectFirestore, timestamp}

