
var express = require("express");
var bodyParser = require("body-parser");

var server = express();
var jsonParser = bodyParser.json();

server.use(express.static(__dirname));
server.use(jsonParser);

server.get("/", function(request, response) {
	console.log('Start page is running');
	response.send("<h1>Welcome to the lesson regarding AJAX</h1>");
});

server.get("/userGet", function(request, response) {
	console.log(request.query);
	var obj = request.query;
	obj.userName += " -ValidatedByGET";
	obj.userAge += " -ValidatedByGET";
	obj.userAddress +=" -ValidatedByGET";
	response.send("You have successfully used Get method : "+ JSON.stringify(request.query));
});

server.post("/userPost", function(request, response) {
	console.log(request.body);
	var obj2 = request.body;
	obj2.userName += " -ValidatedByPOST";
	obj2.userAge += " -ValidatedByPOST";
	obj2.userAddress +=" -ValidatedByPOST";
	response.send("You have successfully used Post method : "+ JSON.stringify(request.body));
});


server.listen(3001);







