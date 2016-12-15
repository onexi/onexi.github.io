var http = require('http');
var url = require('url');

var server = http.createServer(function(request,response){
	var url_parts = url.parse(request.url, true);
	var query = url_parts.query;
	var action = query.action;

	if (!action) {
		response.writeHead(200, {'content-type': 'text/plain'});
		response.end('Empty Action!');
	}
	else{
		response.write('in the else statement \n');
		addContent(response);
		response.end('ran to end\n');		
	}
});

var addContent = function(response){

console.log('in addContent function');	
var timeStamp = (new Date()).toString();
response.write('attempting to insert ' + timeStamp +  ' \n');	

var MongoClient = require('mongodb').MongoClient;
var format = require('util').format;    

MongoClient.connect('mongodb://127.0.0.1:27017/test', function(err, db) {
	if(err) {
		console.log('error:' + JSON.stringify(err));		
		throw err;
	}

	db.collection('stamps').insert({stamp: timeStamp}, {w:1}, function(err, objects) {
		if (err) console.warn(err.message);
		if (err && err.message.indexOf('E11000 ') !== -1) {
			// this _id was already inserted in the database
			console.log("this _id was already inserted in the database");
		}
	});
});


};

server.listen(8000);

console.log('Server running at http://localhost:8000');



