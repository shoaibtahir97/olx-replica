import {signUpNewUser, signInUser} from './config/firebase.js';

window.signUp = function (){
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;


    signUpNewUser(email, password)

}

window.signInUser = function(){
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value

    signInUser(email, password)
}
