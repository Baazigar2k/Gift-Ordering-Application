import firebase from "firebase";
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCuTRuU8lLgjNkXegeQ1pRNrNMcPHJlXPI",
  authDomain: "gift-order-app-9d0d2.firebaseapp.com",
  projectId: "gift-order-app-9d0d2",
  storageBucket: "gift-order-app-9d0d2.appspot.com",
  messagingSenderId: "458096212170",
  appId: "1:458096212170:web:6fd91210631019cd66dc33",
  measurementId: "G-XZ2VZ8L89B",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebaseApp.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
