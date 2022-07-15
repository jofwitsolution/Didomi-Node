const express = require("express");
const router = express.Router();
const {
  getUniversities,
  searchUniversities,
} = require("../controllers/uniController");

router.route("/").get(getUniversities);
router.route("/search").get(searchUniversities);

module.exports = router;
