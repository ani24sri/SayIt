var config = {
   apiKey: "AIzaSyCkDCocWc2wJqpLmzV8yCcasmOqk-Ib5mE",
   authDomain: "sayit-021116.firebaseapp.com",
   databaseURL: "https://sayit-021116.firebaseio.com",
   projectId: "sayit-021116",
   storageBucket: "sayit-021116.appspot.com",
   messagingSenderId: "625805594380"
 };
 firebase.initializeApp(config);
   var bigone = document.getElementById('head');
   var dbRef = firebase.database().ref().child('Title');
   dbRef.on('value', snap => bigone.innerText= snap.val());
    firebase.auth().onAuthStateChanged(function(user) {
      if (user) {
        // User is signed in.
        console.log(user);
      } else {
        // No user is signed in.
        console.log('User not logged in');
      }
    });
    var email =document.getElementById('inputEmail3').value;
    var password = document.getElementById('confirmPassword3').value;
    var createAccount = document.getElementById('registerUser');
    createAccount.addEventListener('click', e => {
      firebase.auth().createUserWithEmailAndPassword(email.trim(), password).catch(function(error) {
      // Handle Errors here.
      if(error){
      console.log(error);
    }
    else{
    console.log('No errors');
  }
});
var user = firebase.auth().currentUser;

user.sendEmailVerification().then(function() {
  // Email sent.
  console.log(user);
}).catch(function(error) {
  // An error happened.
  if (error)
  {
    console.log(error);
  }
  else {
    console.log('Email sent to verify');
  }
});
  });

      var lgnEmail = document.getElementById('inputEmail4').value;
    var lgnPass = document.getElementById('inputPassword4').value;
    var lgnButton = document.getElementById('loginUser');
    lgnButton.addEventListener('click', e => {
      firebase.auth().signInWithEmailAndPassword(lgnEmail.trim(),lgnPass).catch(e => console.log(e.message));
    });
  
