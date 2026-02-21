// Firebase initialization and exports
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyC1knxP2lhm3iCEksxDStK-YMD3GSTGSco",
  authDomain: "greenways-bd206.firebaseapp.com",
  projectId: "greenways-bd206",
  storageBucket: "greenways-bd206.firebasestorage.app",
  messagingSenderId: "983288342540",
  appId: "1:983288342540:web:f4f3667fb44111fa3d2629"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

