var http = require('http');
var url = require('url');
var address = 'mongodb://127.0.0.1:27017/test';

var server = http.createServer(function(request,response){
		response.writeHead(200, {'content-type': 'text/plain'});
		findContent(response);
});

var findContent = function(response){

	var MongoClient = require('mongodb').MongoClient;
	var format = require('util').format;

	MongoClient.connect(address, function(err, db) {
		if(err) { throw err; }

		var results = null;    
		var collection = db
			.collection('farmTest')
			.find({ "inventory.Vegetables.beets": "0011"})
			.limit(10)
			.toArray(function(err, docs) {
				console.dir(docs);
				results = JSON.stringify(docs);    
				response.write(results + '\n');
				response.end('ran to end\n');
		});
	});
};

server.listen(8000);
console.log('Server running at http://localhost:8000');
