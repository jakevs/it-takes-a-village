const router = require("express").Router();
const userRoutes = require("./user");
const postRoutes = require("./post");
const messageRoutes = require("./message");
const skillRoutes = require("./skills");

//User routes
router.use("/user", userRoutes);

//Post routes
router.use("/post", postRoutes);

//Message routes
router.use("/message", messageRoutes);

//Skill routes
router.use("/skill", skillRoutes);

module.exports = router;
