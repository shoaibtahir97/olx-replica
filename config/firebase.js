
// Import the functions you need from the SDKs you need
import { initializeApp,  } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-app.js";
import {getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword} from 'https://www.gstatic.com/firebasejs/9.10.0/firebase-auth.js'
import {getFirestore, collection, addDoc} from 'https://www.gstatic.com/firebasejs/9.10.0/firebase-firestore.js'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCj4CpCAIsBDrZAZX_fQ9xaZ2eoFP1wEws",
    authDomain: "fir-basics-bb240.firebaseapp.com",
    projectId: "fir-basics-bb240",
    storageBucket: "fir-basics-bb240.appspot.com",
    messagingSenderId: "932761062032",
    appId: "1:932761062032:web:c6e217d53d37d22f9b2615"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// Get Firestore and store in variable
const db = getFirestore(app);

function signUpNewUser(userInfo){
    const {email, password} = userInfo;
    createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    // ...
    alert("Successfully registered ")
    addUserToDB(userInfo)
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    // ..
    console.log("Error ---> ", errorMessage);
  });
}


function addUserToDB(userInfo){
  const {email, fullname, age } = userInfo

  return addDoc(collection (db, "users"),{email, fullname, age})
}


function signInUser(){
  signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
  });
}
 
export {
    signUpNewUser,
    signInUser
}