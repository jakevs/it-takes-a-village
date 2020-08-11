const express = require("express");
const routes = require("./routes");
const mongoose = require("mongoose");
const passport = require("passport");
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//Serving static assets
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

//Passports
app.use(passport.initialize());
app.use(passport.session());

//Routes
app.use(routes);

//Connection to mongo
const MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/project3";

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", function () {
  console.log("Connected to db!");
});

app.listen(PORT, function () {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});
