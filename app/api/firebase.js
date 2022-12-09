// Import the functions you need from the SDKs you need
import * as firebase from 'firebase/app'
import * as auth from 'firebase/auth';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBVMvp8RNz62JWvCRXJ5Pwb1BKAXBM4Pqw",
  authDomain: "soundtopia-9d7ad.firebaseapp.com",
  projectId: "soundtopia-9d7ad",
  storageBucket: "soundtopia-9d7ad.appspot.com",
  messagingSenderId: "502648766185",
  appId: "1:502648766185:web:ffe80027421e0b3c97ba78",
  measurementId: "G-F7PE52963T"
};

// Initialize Firebase

let app;

if (firebase.getApp.length === 0) {
  app = firebase.initializeApp(firebaseConfig);
} else {
  app = firebase.getApp();
}
 const getAuth = auth.getAuth(app)


export { getAuth , app };
