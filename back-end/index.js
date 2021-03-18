const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const mongoose = require("mongoose");
const app = express();
const recetteRoute = require("./routes/recette.route.js");
const userRoute = require("./routes/user.route.js");


mongoose
  .connect("mongodb+srv://nouha:nouha123@cluster0.swnxc.mongodb.net/justcrock", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
  })
  .then(() => {
    console.log("connected to mongodb");
  })
  .catch((err) => {
    console.log("failed to connect to MongoDB", err);
  });
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());



app.use("/api/recette", recetteRoute);
app.use("/api/user", userRoute);


const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log("app connected on: " + PORT);
});