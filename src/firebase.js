import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
    apiKey: "AIzaSyBPgJBZWO3jcpdDmDFVahdjQGiQqEMOFGc",
    authDomain: "to-do-683fb.firebaseapp.com",
    projectId: "to-do-683fb",
    storageBucket: "to-do-683fb.appspot.com",
    messagingSenderId: "330399846649",
    appId: "1:330399846649:web:0aec4a7c2d266296901228"
  };
  const app = initializeApp(firebaseConfig);
  const db = getFirestore(app);
  
  export { db };