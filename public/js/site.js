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
    createAccount.addEventListener('submit', function(){
      firebase.auth().createUserWithEmailAndPassword(email, password).catch(function(error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      console.log(errorMessage);
      // ...
    });
    var lgnEmail = document.getElementById('exampleInputEmail1').value;
    var lgnPass = document.getElementById('exampleInputPassword1').value;
    var lgnButton = document.getElementById('loginUser');
    lgnButton.addEventListener('submit', function(){
      firebase.auth().signInWithEmailAndPassword(lgnEmail,lgnPass).catch(e => console.log(e.message));
    });
  });
