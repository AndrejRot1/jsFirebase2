
 
 const firebaseConfig = {
  apiKey: "AIzaSyDFFkEj8kpWRQPdOJ1pJE8jT8rRWTcRq_I",
  authDomain: "fir-ttest-8f419.firebaseapp.com",
  databaseURL: "https://fir-ttest-8f419-default-rtdb.firebaseio.com",
  projectId: "fir-ttest-8f419",
  storageBucket: "fir-ttest-8f419.appspot.com",
  messagingSenderId: "685553553586",
  appId: "1:685553553586:web:313c0f6b9c22907c4039ab",
  measurementId: "G-X9KKJ61BLH"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
const database = firebase.database(app);
const auth = firebase.auth()
 

function addUser(){
  var email = document.getElementById("email").value
  var password = document.getElementById("password").value
  var password2 = document.getElementById("password2").value

  if (password != password2){
    alert('not same password')
  }

  if (password.length < 6){
    alert('password must be at list 6 character')
  }

  if (password == password2){
    console.log(email,password,password2)
    firebase.auth().createUserWithEmailAndPassword(email, password).catch(function(error) {
      console.log(error.code);
      console.log(error.message);
   });
  }
  
}

function Login(){
  var email = document.getElementById("email").value
  var password = document.getElementById("password").value

  firebase.auth().signInWithEmailAndPassword(email, password)
  .then((userCredential) => {
    // Signed in
    var user = userCredential.user;
    console.log(user.email,user.password)
   // window.location.replace("index.html")
    // ...
    newDoc()
  })
  .catch((error) => {
    var errorCode = error.code;
    var errorMessage = error.message;
    alert(errorMessage)
  });

}

function newDoc(){
  window.location.assign("index.html")
  
}

function getUserEmail(){
  firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
      document.getElementById("Hello man").innerHTML = "Hello man " + user.email
    } else {
      // No user is signed in.
    }
  });
}

function SingOut(){
  firebase.auth().signOut().then(() => {
    alert("You are Singed out")
    window.location.assign("login.html")
  }).catch((error) => {
    // An error happened.
  });
  
}

function read(){
  var ref = firebase.database().ref();

ref.on("value", function(snapshot) {
   console.log(snapshot.val());
}, function (error) {
   console.log("Error: " + error.code);
});

}
