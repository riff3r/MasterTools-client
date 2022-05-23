// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDvQSCfZSmK7OMlno1jJ33A_VnGyq_95Sk",
  authDomain: "mastertools-35a91.firebaseapp.com",
  projectId: "mastertools-35a91",
  storageBucket: "mastertools-35a91.appspot.com",
  messagingSenderId: "12659572101",
  appId: "1:12659572101:web:d7b73cbd9a1081e1f018ec",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);

export default auth;
