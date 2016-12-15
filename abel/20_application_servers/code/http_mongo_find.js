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
		findContent(response);
	}
});

var findContent = function(response){

console.log('in findContent function');	
response.write('attempting to find docs\n');	

var MongoClient = require('mongodb').MongoClient;
var format = require('util').format;

MongoClient.connect('mongodb://127.0.0.1:27017/test', function(err, db) {
	if(err) { throw err; }

	var results = null;    
    var collection = db
      .collection('stamps')
      .find({})
      .limit(10)
      .toArray(function(err, docs) {
        console.dir(docs);
        console.log('--- 0 ---');
        results = JSON.stringify(docs);    
        console.log(results);
        response.write(results + '\n');
		response.end('ran to end\n');        
    });
});


};

server.listen(8000);

console.log('Server running at http://localhost:8000');



