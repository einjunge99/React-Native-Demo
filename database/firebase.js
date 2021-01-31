import firebase from 'firebase'
import 'firebase/firestore'
 // Your web app's Firebase configuration
 var firebaseConfig = {
    apiKey: "AIzaSyAKfxl6Hv9sx4IZSNmQMaOaHf_yB_LRhlg",
    authDomain: "react-native-firebase-6a5e1.firebaseapp.com",
    projectId: "react-native-firebase-6a5e1",
    storageBucket: "react-native-firebase-6a5e1.appspot.com",
    messagingSenderId: "776235092057",
    appId: "1:776235092057:web:d6afd4927ae7f95f6cc948"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  const db = firebase.firestore();

  export default{
      firebase,
      db,
  }