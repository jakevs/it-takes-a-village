const passport = require("passport");
const User = require("../models/User");
const LocalStrategy = require("passport-local").Strategy;

//Local Strategy
//passport.use(new LocalStrategy(User.authenticate()));

module.exports = passport;
