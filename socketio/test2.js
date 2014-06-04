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
var count = 0;
var fun1 = function(callback){
	console.log('fun1执行');
	callback();
}

io.on('connection', function (socket) {
	console.log('函数');
    function f1(obj){
    	console.log('函数f1');
    	while(count < 50){
    		console.log('count:' + count++);
    	}
    	count = 0;
    }
    
    
   setInterval(function(){
	   fun1(f1);
   },1000);
   console.log('这里！'); 

});