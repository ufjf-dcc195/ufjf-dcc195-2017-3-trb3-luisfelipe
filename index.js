var express = require("./config/express");
var mongoose = require("./config/mongoose")
var db = mongoose();
var app = express();
var porta = process.env.PORT || 3000
app.listen(porta);
console.log("Escutando em http://localhost:3000");

module.exports = app;
