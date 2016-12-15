var http = require('http');
var url = require('url');

var server = http.createServer(function(request,response){
	var url_parts = url.parse(request.url, true);
	var query = url_parts.query;
	response.writeHead(200, {'content-type': 'text/plain'});
	response.write('name: ' + query.name + '\n');
	response.write('fruit: ' + query.fruit + '\n');
	query = JSON.stringify(url_parts.query);		
	response.end('Your parameters are: ' + query);	
});

server.listen(8000);

console.log('Server running at http://localhost:8000');



