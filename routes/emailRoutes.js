const express = require("express");
const router = express.Router();
const { protect, admin } = require("../middleware/authMiddleware");
const { sendEmail } = require("../controllers/emailController");

router.route("/").post(protect, admin, sendEmail);

module.exports = router;
