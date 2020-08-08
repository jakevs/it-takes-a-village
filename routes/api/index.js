const router = require("express").Router();
const userRoute = require("./user");
const postRoute = require("./post");
const messageRoute = require("./message");

//User routes
router.use("/user", userRoute);

//Post routes
router.use("/post", postRoute);

//Message routes
router.use("/message", messageRoute);

module.exports = router;
