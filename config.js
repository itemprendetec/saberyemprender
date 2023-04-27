import firebase from "firebase/compat/app";
import "firebase/compat/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDVNPE7EWTTucaZWE-01RDr_CuiRAzx2WM",
  authDomain: "saber-y-emprender.firebaseapp.com",
  projectId: "saber-y-emprender",
  storageBucket: "saber-y-emprender.appspot.com",
  messagingSenderId: "183312995666",
  appId: "1:183312995666:web:63ff2fa4eecec0ef06d68b"
};

const initFirebase = () => {
  firebase.initializeApp(firebaseConfig);
};

export default initFirebase;