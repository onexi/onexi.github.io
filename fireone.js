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

    // fireone token check
    if(localStorage.getItem('fireone')){
        console.log(JSON.parse(localStorage.getItem('fireone')));
        return;        
    }
    else{
        firebase.auth().getRedirectResult().then(function(result){
            var fireone = {};
            if(!result.credential){
                // user not found, authenticate user
                var provider = new firebase.auth.GithubAuthProvider();
                firebase.auth().signInWithRedirect(provider);
                return;
            }

            // user authenticated, access properties
            fireone.email = result.user.email;
            console.log(fireone.email);

            // use accessToken for github api
            fireone.token = result.credential.accessToken;
            var url = 'https://api.github.com/user?access_token=' + fireone.token;
            var xhr = new XMLHttpRequest();
            xhr.onload = function(){ handler(xhr,fireone); };
            xhr.open("GET",url);
            xhr.send();

        }).catch(function(error){
            console.log('Failed Login to Firebase', error);        
        });    
    }

}

function handler(xhr, fireone) {
  var response = xhr.response;
  if (response){
    response = JSON.parse(response);
    fireone.login = response.login;
    localStorage.setItem('fireone', JSON.stringify(fireone));
    document.getElementById('status').innerHTML = 'sucess!!';
  }
}

window.onload = function(){
  fireone();
};
