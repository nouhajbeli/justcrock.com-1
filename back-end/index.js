const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const mongoose = require("mongoose");
const sequelize = require('./config/config');

const PORT = process.env.PORT || 3000;
var http = require("http");
var dotenv = require("dotenv");
const app = express();
dotenv.config();
const morgan = require("morgan");

const recetteRoute = require("./routes/recette.route.js");
const userRoute = require("./routes/user.route.js");
require('./config/passportConfig')
var server = http.createServer(app);
var io = require('socket.io').listen(server);

const passport = require('passport');


app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());


app.use(passport.initialize())
app.use(morgan("dev"));

app.use("/api/recette", recetteRoute);
app.use("/api/user", userRoute);

io.on("connection", function (socket) {
  console.log("user connected");

  socket.on("chat message", (message) => {
    console.log(message);
    io.emit("chat message", message);
  });
  socket.on("disconnect", function () {
    console.log("user disconnected");
  });
});
const startServer = async () => {
  try {
    await sequelize.authenticate();
    await sequelize.sync();
    console.log('Connection has been established successfully.');
    server.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}.`);
    });
  } catch (error) {
    console.log(error);
  }
};

startServer();
