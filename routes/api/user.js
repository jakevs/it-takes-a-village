const router = require("express").Router();
const userController = require("../../controllers/userController");

router
  .route("/")
  .get(userController.findAll)

  .put(userController.findOne)
  .post(userController.create);

router
  .route("/:email")
  .get(userController.findByEmail)
  .get(userController.getSkills);

module.exports = router;
