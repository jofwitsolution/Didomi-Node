const express = require("express");
const router = express.Router();
const { getStats, updateStats } = require("../controllers/statsController");
const { protect, admin } = require("../middleware/authMiddleware");

router.route("/").get(getStats);
router.route("/:id").put(protect, admin, updateStats);

module.exports = router;
