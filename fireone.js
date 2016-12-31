// Initialize Firebase
var config = {
  apiKey: "AIzaSyC2Eto_FZdxit72Oe0HX7wh0GyQQO-dPTA",
  authDomain: "inspector-9b3a3.firebaseapp.com",
  databaseURL: "https://inspector-9b3a3.firebaseio.com",
  storageBucket: "inspector-9b3a3.appspot.com",
  messagingSenderId: "786634246790"
};
firebase.initializeApp(config);


function fireone(){
  if(localStorage.getItem('fireone')){
    console.log('fireone found!');    
    var fireone = localStorage.getItem('fireone');
    fireone = JSON.parse(fireone);
    console.log(fireone);

    // verify token    
    try{
      var url = 'https://api.github.com/user?access_token=' + fireone.accessToken;
      var xhr = new XMLHttpRequest();
      xhr.onload = function(){ verify(xhr,fireone); };
      xhr.open("GET",url);
      xhr.send();    
    }    
    catch(e){
      console.log('Verification failed: ' + e);
      authenticate();      
    }
  }
  else{
    console.log('fireone NOT found!');        
    authenticate();
  }
}

function verify(xhr, fireone) {
  var response = xhr.response;
  if (response){
    response = JSON.parse(response);
    if (fireone.login === response.login){ 
      return; 
    }
    else{
      console.log('Verification failed, logins different!');
      authenticate();            
    }
  }
  else{
    console.log('Verification failed, reponse empty!');
    authenticate();          
  }
}

function authenticate(){
  var fireone = {};
  var provider = new firebase.auth.GithubAuthProvider();

  // pop up authentication
  // -------------------------    
  firebase.auth().signInWithPopup(provider).then(function(result) {
    // GitHub Access Token
    var token = result.credential.accessToken;
    fireone.accessToken = token;
    var user = result.user;
    fireone.email = user.email;    

    var url = 'https://api.github.com/user?access_token=' + token;
    var xhr = new XMLHttpRequest();
    xhr.onload = function(){ handler(xhr,fireone); };
    xhr.open("GET",url);
    xhr.send();
  }).catch(function(error) {
    var errorCode = error.code;
    var errorMessage = error.message;
    var email = error.email;
    var credential = error.credential;
  });

}

function handler(xhr, fireone) {
  var response = xhr.response;
  if (response){
    response = JSON.parse(response);
    fireone.login = response.login;
    localStorage.setItem('fireone', JSON.stringify(fireone));
  }
}

window.onload = function(){
  fireone();
};
