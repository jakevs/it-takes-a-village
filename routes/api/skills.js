const router = require("express").Router();
const skillController = require("../../controllers/skillController");

router.route("/").get(skillController.findAll).post(skillController.create);

/* router.delete(skillController.remove); */

module.exports = router;
