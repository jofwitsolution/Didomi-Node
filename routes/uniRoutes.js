const express = require("express");
const router = express.Router();
const { getUniversities } = require("../controllers/uniController");

router.route("/").get(getUniversities);

module.exports = router;
