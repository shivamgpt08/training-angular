const  express = require("express");
const compression = require("compression");
const  app = express();

// compress all responses
app.use(compression())

app.use(express.static(__dirname + "/dist"));

app.get("/*", function(req, res) {
  res.status(200).sendFile(__dirname + "/dist/index.html");
});

app.listen(process.env.PORT || 8080);
