import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAQTZL12vhMjhyZWqG_Bp93hO3V_U46Jkw",
  authDomain: "farmerapp-59a72.firebaseapp.com",
  projectId: "farmerapp-59a72",
  storageBucket: "farmerapp-59a72.appspot.com",
  messagingSenderId: "800266797788",
  appId: "1:800266797788:web:30d1ff3ef049dda781ea19",
  measurementId: "G-X312GR8H0J"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { app, auth, db }


