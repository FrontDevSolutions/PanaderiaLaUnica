const express = require("express");
const mongoose = require("mongoose");
/*const bodyParser = require("body-parser");
const passport = require("passport"); */
const users = require("./src/rutes/user");
const app = express();

//Bodyparsermiddleware
app.use(express.json());
//Routes
app.use("/api", users);

//DBConfig
const db = require("./keys").mongoURI;
console.log(db);

//ConnecttoMongoDB
mongoose
  .connect("mongodb+srv://Acua12:12345@cluster0.lc63ood.mongodb.net/launica?retryWrites=true&w=majority")
  .then(() => console.log("Connected to MongoDB Atlas"))
  .catch((error) => console.error(error));

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Serverupandrunningonport${port}!`));