const express = require("express");
const router = express.Router();
const User = require("../models/User");
const passport = require("passport");

//Route for signup
router.post("/login", function (req, res) {
  Users = new User({ email: req.body.email, username: req.body.username });

  User.register(Users, req.body.password, function (err, user) {
    if (err) {
      res.json({ success: false });
    } else {
      res.json({ success: true });
    }
  });
});

//Route for login

User.doLogin = function (req, res) {
  if (!req.body.username) {
    res.json({ success: false, message: "Username was not given" });
  } else {
    if (!req.body.password) {
      res.json({ success: false, message: "Password was not given" });
    } else {
      passport.authenticate("local", function (err, user, info) {
        if (err) {
          res.json({ success: false, message: err });
        } else {
          if (!user) {
            res.json({
              success: false,
              message: "username or password incorrect",
            });
          } else {
            req.login(user, function (err) {
              if (err) {
                res.json({ success: false, message: err });
              } else {
                const token = jwt.sign(
                  { userId: user._id, username: user.username },
                  secretkey,
                  { expiresIn: "24h" }
                );
                res.json({ success: true });
              }
            });
          }
        }
      })(req, res);
    }
  }
};

//Route for logout
router.get("/logout", (req, res) => {
  req.logout();
  res.redirect("/login");
});

module.exports = router;
