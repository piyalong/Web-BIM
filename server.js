var express =  require('express');
var socket = require('socket.io');

var app= express();
var server = app.listen(3000,function(){
	console.log ('listen');
	
	});
	app.get('/',function(req,res){
		 res.sendFile(__dirname + '/index.html');
		
		});
	
	var io = socket(server);
	
	io.on('connection',function(socket){
		console.log ('connected',socket.id)
		
		
		socket.on('scale', function(data){
			console.log("scale"+data);
			io.sockets.emit('scale',data);
			
			});
			
			socket.on('rotation', function(data){
			console.log("rotation"+data);
			io.sockets.emit('rotation',data);
			
			});
			
			socket.on('translate', function(data){
			console.log("translate"+data);
			io.sockets.emit('translate',data);
			
			});
			
			
			});
		  