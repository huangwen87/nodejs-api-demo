/**
 * New node file
 */
var app = require('express')()
  , server = require('http').createServer(app)
  , io = require('socket.io').listen(server);

server.listen(80);

app.get('/', function (req, res) {
	res.sendfile(__dirname + '/views/index.html');
});

io.sockets.on('connection', function (socket) {
	  socket.emit('news', { hello: 'world' });
	  socket.on('my other event', function (data) {
	    console.log(data);
	  });
});