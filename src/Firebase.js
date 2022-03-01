// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider, signInWithPopup} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBUSVZtl7ew1M8kAQMf0nBCQ3RQN_Ct7k8",
  authDomain: "office-new-b4d63.firebaseapp.com",
  projectId: "office-new-b4d63",
  storageBucket: "office-new-b4d63.appspot.com",
  messagingSenderId: "298778647479",
  appId: "1:298778647479:web:de0c19d8f3757462cd6632"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

export const provider = new GoogleAuthProvider();
provider.setCustomParameters({
  prompt: "select_account"
});

export const signInWithGoogle2 = ()=> signInWithPopup(auth, provider);
export const signInWithGoogle = ()=> {
    signInWithPopup(auth, provider)
    .then((result)=>{
        console.log(result);
        const namegoog = result.user.displayName
        const emailgoog = result.user.email
        const pictgoog = result.user.photoURL
        localStorage.setItem('token', namegoog);
        localStorage.setItem('emtoken', emailgoog);
        localStorage.setItem('phtoken', pictgoog);
        return emailgoog;
    }).catch((error)=>{
        console.log(error);
    });
}