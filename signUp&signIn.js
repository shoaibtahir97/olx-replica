import {signUpNewUser, signInUser} from './config/firebase.js';

window.signUp = function (){
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const fullname = document.getElementById("fullname").value;
    const age = document.getElementById("age").value;

    signUpNewUser({email, password, fullname, age})

}

window.signInUser = function(){
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value

    signInUser(email, password)
}
