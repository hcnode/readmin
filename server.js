/*eslint-disable no-console, no-var */
var express = require('express')
var request = require('request');

var app = express()


app.use(express.static(__dirname + "/public"))

app.get("/proxy", (req, res, next) => {
	const url = req.query.url;
	request(url).pipe(res);
})

app.listen(8080, function () {
  console.log('Server listening on http://localhost:8080, Ctrl+C to stop')
})
