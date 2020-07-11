const router = require("express").Router();
const googleController = require("../../controllers/realtorController");

// Matches with "/api/google"
router
  .route("/")
  .get(realtorController.findAll);

module.exports = router;
