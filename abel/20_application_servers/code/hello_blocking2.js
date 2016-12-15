// var greeting = function(){
// 	setTimeout(function(){
// 		console.log('inside');
// 	}, 2000);
// 	return 'outside';
// };


// var http = require('http');

// var options = {
//   host: 'example.com',
//   port: 80,
//   path: '/foo.html'
// };

// http.get(options, function(resp){
//   resp.on('data', function(chunk){
//     //do something with chunk
//   });
// }).on("error", function(e){
//   console.log("Got error: " + e.message);
// });

//----------------------

var http = require('http');

var options = {
  host: 'www.mit.edu',
  path: '/index.html'
};

console.log('one');
callback = function(response) {
  var str = '';

  //another chunk of data has been recieved, so append it to `str`
  response.on('data', function (chunk) {
    str += chunk;
  });

  //the whole response has been recieved, so we just print it out here
  response.on('end', function () {
    console.log(str);
  });
};

console.log('two');
http.request(options, callback).end();

console.log('three');

var highCount = function(){
	var value;
	var limit = 100000;
	for (var i = 0; i < limit; i++) {
		for (var j = 0; j < limit; j++) {
			value = j-1; 
		}
	}
};

console.log('four');
var notice = function(){
	console.log('done!');
};
console.log('five');
var handler = function(f,callback){
	f();
	callback();
};
console.log('six');
//handler(highCount,notice);
console.log('seven');
