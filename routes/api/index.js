const router = require("express").Router();
const userRoute = require("./user");

//User routes
router.use("/user", userRoute);

module.exports = router;
