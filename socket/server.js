var http = require("http");
var url = require('url');
var fs = require('fs');
var io = require('socket.io');

// drone controller
var dc = require("./control.js");

var server = http.createServer(function(request, response){
    console.log('Connection');
    var path = url.parse(request.url).pathname;
    console.log(path);
    switch(path){
        case '/':
            response.writeHead(200, {'Content-Type': 'text/html'});
            response.write('hello world');
            response.end();
            break;
        case '/socket.html':
        	console.log(__dirname + path);
            fs.readFile(__dirname + path, function(error, data){
                if (error){
                    response.writeHead(404);
                    response.write("opps this doesn't exist - 404");
                    response.end();
                }
                else{
                	console.log(data);
                    response.writeHead(200, {"Content-Type": "text/html"});
                    response.write(data, "utf8", function() {
                    	response.end();	
                    });
                }
            });
            break;
        default:
            response.writeHead(404);
            response.write("opps this doesn't exist - 404");
            response.end();
            break;
    }
});

server.listen(8001);

var sio = io.listen(server);

sio.sockets.on("connection", function(socket) {
	setInterval(function() {
		socket.emit("date", {"date" : new Date()});
	}, 1000);

	socket.on("keydown", function(data) {
		dc.processKey(data.key.toLowerCase());
	});

	socket.on("keyup", function(data) {
		dc.stop();
	});

	socket.on("sequence", function(data) {
		console.log("sequence");
		console.log(data);
		var sequence = data.sequence.split("");
		console.log(sequence);
		for(var s in sequence) {
			dc.processKey(s.toLowerCase());
		}
		dc.stop();
	});
})
