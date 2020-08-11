const passport = require("passport");
const db = require("../models");
const LocalStrategy = require("passport-local").Strategy;

// Serialize is used to keep user logged in from page to page.
passport.serializeUser((user, done) => {
  done(null, user.id);
});
passport.deserializeUser((id, done) => {
  db.User.findById(id, (err, user) => {
    done(err, user);
  });
});

//Local Strategy
passport.use(
  new LocalStrategy((username, password, done) => {
    User.findOne({
      where: {
        username: username,
      },
    }).then((dbUser) => {
      if (!dbUser) {
        return done(null, false, {
          message: "Provide a valid username.",
        });
      } else if (!dbUser.validPassword(password)) {
        return done(null, false, {
          message: "Incorrect password.",
        });
      }
      return done(null, dbUser);
    });
  })
);
