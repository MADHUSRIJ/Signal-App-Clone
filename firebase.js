import { initializeApp } from 'firebase/app';
import {getAuth} from "firebase/auth";
import {getFirestore} from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyC_lwjDDE_Zr4sCI8xRpMS9HJOQjvq6IMk",
    authDomain: "signal-clone-b6608.firebaseapp.com",
    projectId: "signal-clone-b6608",
    storageBucket: "signal-clone-b6608.appspot.com",
    messagingSenderId: "1051077562609",
    appId: "1:1051077562609:web:489828f1f1631ee6609950",
    measurementId: "G-CD1ESLJD7M"
  };
let app;
if(app==null){
  app = initializeApp(firebaseConfig);
}
else{
  app = app();
}


const dp = getFirestore();
const auth = getAuth();

export {dp,auth};
