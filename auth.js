console.log('AuthStarted');
firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    //User is signed in .
    $(document).ready(function() {

      $('#user_div').fadeIn('slow');
      $('#input').css('display', 'none');
      $('#registration').css('display', 'none');

    });
    // document.getElementById("user_div").style.display = "block";
    // document.getElementById("input").style.display = "none";
    // document.getElementById('registration').style.display = "none";

    var user = firebase.auth().currentUser;

    if (user != null) {}

  } else {
    // No user is signed in.
    document.getElementById("user_div").style.display = "none";
    document.getElementById("input").style.display = "block";

  }
});

//Switch div to registration form
function newUser() {
  document.getElementById("input").style.display = "none";
  document.getElementById("registration").style.display = "block";
}

// Registrate new user
function registrate() {

  var newUserEmail = document.getElementById('new_email').value;
  var newUserPass = document.getElementById('new_pass').value;
  firebase.auth().createUserWithEmailAndPassword(newUserEmail, newUserPass).catch(function(error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    // ...
    window.alert("Error : " + errorMessage);
  });

}

// LOGIN
function login() {

  var userEmail = document.getElementById("email_field").value;
  var userPass = document.getElementById("password_field").value;

  firebase.auth().signInWithEmailAndPassword(userEmail, userPass).catch(function(error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;

    window.alert("Error : " + errorMessage);

    // ...
  });
}

//Logout
function logout() {
  firebase.auth().signOut();
}
