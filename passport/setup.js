const User = require("../models/User");
const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;

// Serialize is used to keep user logged in from page to page.
passport.serializeUser((user, done) => {
  done(null, user.id);
});
passport.deserializeUser((id, done) => {
  User.findById(id, (err, user) => {
    done(err, user);
  });
});

//Local Strategy
