var http = require('http');
var url = require('url');

var server = http.createServer(function(request,response){
	var url_parts = url.parse(request.url, true);
	var query = url_parts.query;
	response.writeHead(200, {'content-type': 'text/plain'});

	// create object with parameters
	var obj = { name : query.name, fruit : query.fruit};

	// send parameters back to browser as json string
	objString = JSON.stringify(obj);    
	response.end(objString);  
});

server.listen(8000);

console.log('Server running at http://localhost:8000');