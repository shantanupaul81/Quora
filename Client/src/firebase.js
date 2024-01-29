// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDEbMn5Jxw6uUxbbV-ORDBsF3p_eJZg50k",
  authDomain: "quora-clone-mern-afa09.firebaseapp.com",
  projectId: "quora-clone-mern-afa09",
  storageBucket: "quora-clone-mern-afa09.appspot.com",
  messagingSenderId: "621093023870",
  appId: "1:621093023870:web:5d40e18ea1f5806016682f",
  measurementId: "G-SYVGZQDJ29"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();
const provider = new GoogleAuthProvider();
// const analytics = getAnalytics(app);
export { auth, provider };
