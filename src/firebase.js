import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({    
        apiKey: "AIzaSyCfjMXb_8OfuaOWLs8nXA6WdhiM-WovlBw",
        authDomain: "clone-d5ff4.firebaseapp.com",
        databaseURL: "https://clone-d5ff4.firebaseio.com",
        projectId: "clone-d5ff4",
        storageBucket: "clone-d5ff4.appspot.com",
        messagingSenderId: "1008084039097",
        appId: "1:1008084039097:web:c63d1bf86d469ba8ed3268"      
}); 

// const db = firebaseApp.firestore();
const auth = firebase.auth(); 

export { auth }; 