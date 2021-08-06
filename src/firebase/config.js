import firebase from 'firebase';
import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/storage'

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  var firebaseConfig = {
    apiKey: "AIzaSyCxrl0mnFZlVHW1Z-aFayFgs6yYiSBc2dc",
    authDomain: "olx-clone-ac895.firebaseapp.com",
    projectId: "olx-clone-ac895",
    storageBucket: "olx-clone-ac895.appspot.com",
    messagingSenderId: "581592001715",
    appId: "1:581592001715:web:7a95f40e6bc29ad2e954c6",
    measurementId: "G-PL47Z9PMCD"
  };
  // Initialize Firebase
 export default  firebase.initializeApp(firebaseConfig);