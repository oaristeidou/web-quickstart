/**
 * Created by odyssefs on 03.12.16.
 */
(function(){
// Initialize Firebase
  var config = {
    apiKey: "AIzaSyCs6O6oEpp3_t4BjRgVFAXlCkm-2aUQ-7A",
    authDomain: "web-quickstart-373b2.firebaseapp.com",
    databaseURL: "https://web-quickstart-373b2.firebaseio.com",
    storageBucket: "web-quickstart-373b2.appspot.com",
    messagingSenderId: "609389169468"
  };
  firebase.initializeApp(config);

  const userEmail = document.getElementById("user-email");
  const userPassword = document.getElementById("user-pw");
  const btnLogin = document.getElementById("btnLogin");
  const btnSignUp = document.getElementById("btnSignUp");
  const btnLogout = document.getElementById("btnLogout");

  //Add a Login Event
  btnLogin.addEventListener("click", e => {
    // Get email and password
    const email = userEmail.value;
    const password = userPassword.value;
    const auth = firebase.auth();

    // Sign in
    const promise = auth.signInWithEmailAndPassword(email, password);
    promise.catch(e => console.log(e.message));




  });



})();

