const router = require("express").Router();
const userRoutes = require("./user");
const postRoutes = require("./post");
const messageRoutes = require("./message");

//User routes
router.use("/user", userRoutes);

//Post routes
router.use("/post", postRoutes);

//Message routes
router.use("/message", messageRoutes);

module.exports = router;
