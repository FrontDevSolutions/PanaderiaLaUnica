
const express = require("express");
const app = express();
const port = 5050;

require("./middleware")(app);

require("./bin/databases");


//app.get("/login", (req, res) => {
  //  res.send("_")
//})

app.get("/login", login);

function login (req, res){
    res.sendFile(__dirname + "/index.html");
}
require('./routes/index')(app);

app.listen(port, () => {
    console.log("Servidor levandado");
});