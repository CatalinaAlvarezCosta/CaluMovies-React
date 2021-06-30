import firebase from "firebase/app";
import "firebase/firestore";

var firebaseConfig = {
  apiKey: "AIzaSyDyRG7WiywSllmX9HGbZWOZDfHeH1-73cc",
  authDomain: "calumoviescoderhouse.firebaseapp.com",
  projectId: "calumoviescoderhouse",
  storageBucket: "calumoviescoderhouse.appspot.com",
  messagingSenderId: "819483148751",
  appId: "1:819483148751:web:5b384c651c4bfe70c312ba",
};

const fb = firebase.initializeApp(firebaseConfig);

export const dataBase = fb.firestore();
