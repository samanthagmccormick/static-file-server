var fs = require('fs');
var express = require('express');

var app = express();
app.set('view engine', 'jade');
app.set('views', __dirname + '/views');

app.get('/:filename', function(req, res) {
	// access value of :filename with req.params.filename
	// read the file with the specified filename
	// send the contents of the file to the user
		var fileName = req.params.filename;

		fs.readFile('./public/' + fileName, function(err, data){
			res.header('Content-Type', 'text/html'); 
			res.send(data);
		});
});

var server = app.listen(4755, function() {
	console.log('Express server listening on port ' + server.address().port);
});
