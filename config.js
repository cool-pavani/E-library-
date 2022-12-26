import firebase from "firebase";
require("@firebase/firestore");

const firebaseConfig = {
  apiKey: "AIzaSyCuo3VjKleYqSci-4bDpYWjWp5pUwWnmJM",
  authDomain: "e-library-f8ecc.firebaseapp.com",
  projectId: "e-library-f8ecc",
  storageBucket: "e-library-f8ecc.appspot.com",
  messagingSenderId: "460207544406",
  appId: "1:460207544406:web:503050580bce8bb5dd43f7"
};

firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
