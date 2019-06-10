
import firebase from 'firebase/app'
import "firebase/firestore"
import "firebase/auth"

const firebaseConfig = {
    apiKey: "AIzaSyDrx459jswbaA_T0zBfaJ3aZl1-xHIKfSg",
    authDomain: "marioplan-630ee.firebaseapp.com",
    databaseURL: "https://marioplan-630ee.firebaseio.com",
    projectId: "marioplan-630ee",
    storageBucket: "marioplan-630ee.appspot.com",
    messagingSenderId: "35826215215",
    appId: "1:35826215215:web:1288c0a3cf99fa1f"
};

firebase.initializeApp(firebaseConfig);
firebase.firestore().settings({ timestampsInSnapshots: true})

export default firebase;