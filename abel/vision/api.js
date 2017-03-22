var request = require("request");

var options = {
  url : "https://westus.api.cognitive.microsoft.com/vision/v1.0/analyze?visualFeatures=Tags&language=en",
  headers : {
    "Content-Type" : "application/json",
    "Ocp-Apim-Subscription-Key": "9dc9e268800443afbb131984d2697ba2"
  },
  body : "{\"url\":\"http://onexi.org/materials/img/02.jpg\"}"
};

function callback(error, response, body) {
  if (!error && response.statusCode == 200) {
    console.log('success');    
    console.log(body);
  }
  else{
    console.log('fail');        
    console.log(error);
    console.log(body);    
  }
}

request.post(options, callback);