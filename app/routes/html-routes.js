//dependencies
var path = require("path");
var express = require("express");
var app = express();

app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/index.html"));
});

app.get("/portfolio", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/portfolio.html"));
});
app.get("/contact", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/contact.html"));
});

module.exports = app;

