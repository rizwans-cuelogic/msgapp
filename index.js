var express = require("express");
var http = require("http");
const result = require('dotenv').config()
var app = express();

var server = http.createServer(app).listen(process.env.PORT);
var io = require("socket.io")(server);

app.use(express.static("./public"));

io.on("connection", function(socket) {
    socket.on("msg", function(message) {
    	socket.broadcast.emit("message", message);
    });

	socket.emit("message", "Welcome to Msg App");
});
console.log("Starting Socket App - %s",process.env.PORT);