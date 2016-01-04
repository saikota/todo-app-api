 var server=require('./server');
 var port=8080||Number(process.env.SERVER_PORT)
 server.listen(port,function(){
	 console.log("todo server is listening on %j",server.address());
 });
