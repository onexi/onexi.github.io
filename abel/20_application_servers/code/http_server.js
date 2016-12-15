var http = require('http');
var url = require('url');
var address = 'mongodb://127.0.0.1:27017/test';

var takeAction = function(request){

	var url_parts = url.parse(request.url, true);
	var query = url_parts.query;
	var action = query.action;

	switch(action){
		case 'find':
			return find;
		case 'insert':
			return insert;
		case 'update':
			return update;
		case 'drop':
			return drop;
		default:
			return noMatch;
	}
};

var server = http.createServer(function(request,response){

	response.writeHead(200, {'content-type': 'text/plain'});
	var action = takeAction(request,response);
	action(response);
});

var noMatch = function(response){
	response.end('Error: empty Action!');
};

var find = function(response){
	response.write('looking for docs\n');	
	var MongoClient = require('mongodb').MongoClient;
	var format = require('util').format;

	MongoClient.connect(address, function(err, db) {
		if(err) { throw err; }

		var collection = db
			.collection('stamps')
			.find({})
			.limit(10)
			.toArray(function(err, docs) {
				console.dir(docs);
				var results = JSON.stringify(docs);    
				console.log(results);
				response.write(results + '\n');
				response.end('ran to end\n');
				db.close();	
			});
	});
};

var insert = function(response){
	var timeStamp = (new Date()).toString();
	response.write('attempting to insert ' + timeStamp +  ' \n');	
	var MongoClient = require('mongodb').MongoClient;
	var format = require('util').format;    

	MongoClient.connect(address, function(err, db) {
		if(err) { throw err; }

		db.collection('stamps').insert({stamp: timeStamp}, {w:1}, function(err, objects) {
			if (err) console.warn(err.message);
			if (err && err.message.indexOf('E11000 ') !== -1) {
				console.log("this _id was already inserted in the database");
			}
			db.close();
			response.end('ran to end\n');				
		});
	});
};

server.listen(8000);
console.log('Server running at http://localhost:8000');

