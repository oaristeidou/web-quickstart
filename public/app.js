/**
 * Created by odyssefs on 03.12.16.
 */
(function () {
// Initialize Firebase
//  var config = {
//    apiKey: "AIzaSyCs6O6oEpp3_t4BjRgVFAXlCkm-2aUQ-7A",
//    authDomain: "web-quickstart-373b2.firebaseapp.com",
//    databaseURL: "https://web-quickstart-373b2.firebaseio.com",
//    storageBucket: "web-quickstart-373b2.appspot.com",
//    messagingSenderId: "609389169468"
//  };
//  firebase.initializeApp(config);
//
//
//

  const userEmail = document.getElementById("username");
  const userPassword = document.getElementById("password");
  const btnLogin = document.getElementById("btnLogin");
  const btnSignUp = document.getElementById("btnSignUp");
  const btnLogout = document.getElementById("btnLogout");

  //Add a Login Event
  btnLogin.addEventListener("click", e => {
    // Get email and password
    const email = userEmail.value;
  const password = userPassword.value;

  firebase.auth().signInWithEmailAndPassword(email, password).catch(function (error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    console.error(error.message)
  });
});

  //Add a sign up event
  btnSignUp.addEventListener("click", e => {
    // Get email and password
    const email = userEmail.value; // Check for real email
    const password = userPassword.value;

    firebase.auth().createUserWithEmailAndPassword(email, password).catch(function (error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      console.error(error.message)
    });
  });

  btnLogout.addEventListener("click", e => {
    firebase.auth().signOut();
  });

  // Add a firebase realtime listener
  firebase.auth().onAuthStateChanged (firebaseUser => {
    if (firebaseUser){
      console.log(firebaseUser);
      btnLogout.classList.remove('hide');
    }
    else {
      console.log("not logged in!");
      btnLogout.classList.add('hide');
    }

  });


})();

