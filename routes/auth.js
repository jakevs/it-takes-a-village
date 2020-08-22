const express = require("express");
const router = express.Router();
const User = require("../models/User");
const passport = require("passport");

//Route for signup
router.post("/signup", (req, res) => {
  User.register(
    new User({ username: req.body.email }),
    req.body.password,
    (err, user) => {
      if (err) {
        console.log(err);
        res.redirect("/signup");
      }
      passport.authenticate("local")(req, res, () => {
        res.redirect("/profile");
      });
    }
  );
});

//Route for login

router.post(
  "/login",
  passport.authenticate("local", {
    successRedirect: "/profile",
    failureRedirect: "/login",
  }),
  (req, res) => {}
);

//Route for logout
router.get("/logout", (req, res) => {
  req.logout();
  res.redirect("/login");
});

module.exports = router;
