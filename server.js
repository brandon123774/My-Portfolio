//NPM packages
var express = require("express");

//Ports
var PORT = process.env.PORT || 8080;

//Creating express
var app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));


//Routes

require("./routes/html-routes.js")(app);

app.listen(PORT, function () {
    console.log("==> 🌎  Listening on port %s. Visit http://localhost:%s/ in your browser.", PORT, PORT);
});

