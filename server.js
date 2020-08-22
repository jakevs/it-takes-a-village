const express = require("express");
const session = require("express-session");
const mongoose = require("mongoose");
const MongoStore = require("connect-mongo")(session);

//const passport = require("passport");
//const auth = require("./routes/auth");
//require("./passport/setup");
//const User = require("./models/User");

const app = express();
const PORT = process.env.PORT || 3001;
const routes = require("./routes");

//Connection to mongo
const MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/project3";

mongoose
  .connect(MONGODB_URI, { useNewUrlParser: true })
  .then(console.log(`MongoDB connected`))
  .catch((err) => console.log(err));

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//Serving static assets
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

//Passport middleware
//app.use(passport.initialize());
//app.use(passport.session());

// Serialize is used to keep user logged in from page to page.
//passport.serializeUser(User.serializeUser());
//passport.deserializeUser(User.deserializeUser());

//Express Session
app.use(
  session({
    secret: "cat",
    resave: false,
    saveUninitialized: true,
    store: new MongoStore({ mongooseConnection: mongoose.connection }),
  })
);

//Routes
app.use(routes);
//app.use("/api/auth", auth);

//Express server start
app.listen(PORT, function () {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});
