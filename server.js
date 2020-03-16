//dependencies
var express = require("express");
var app = express();

//port
var PORT = process.env.PORT || 8080;

//enable cors
var corsOptions = {
  origin: process.env.ORIGIN_URL || "http://localhost",
  optionsSuccessStatus: 200
};

//static public
app.use(express.static("./app/public"));

//routes
var htmlRoutes = require("./app/routes/html-routes");
app.use(htmlRoutes);


//cors
app.use("/cors/*", function(req, res) {
  req.pipe(request(req.params[0])).pipe(res);
});

//connection
app.listen(PORT, function() {
  console.log("CORS-enabled web server listening on port " + PORT);
});