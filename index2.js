var express = require("express");
var venom = require("venom-bot");

venom.create().then((client) => start(client));

function start(client) {
	
	var app = express();
	app.listen(3000, () => {
		console.log("Server running port 3000");
	});
	
	app.get("/message", async (req, res, next) => {
	
		//await client.sendText(req.query.number, req.query.message);

		//res.json(req.query);
		//
		//
		 client.sendText(req.query.number + '@c.us', req.query.message)
        		.then((result) => {
         		 console.log('Result: ', result); //return object success
        		})
        		.catch((erro) => {
          			console.error('Error when sending: ', erro); //return object error
        		})
		;
	});
	
	client.onMessage((message) => {
		if (message.body === "Hi") {
			client.sendText(message.from, 'Welcome Venom');
		}
	});
	
}
