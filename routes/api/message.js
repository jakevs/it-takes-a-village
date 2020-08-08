const router = require("express").Router();
const messageController = require("../../controllers/messageController");

router.route("/").get(messageController.findAll).post(messageController.create);

router
  .route("/:id")
  .get(messageController.findById)
  .delete(messageController.remove);

module.exports = router;
