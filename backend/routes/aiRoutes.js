const express = require("express");

const router = express.Router();

const { analyzeResume } = require("../controllers/aiController");
const protect = require("../middleware/authMiddleware");

router.get("/:id", protect, analyzeResume);

module.exports = router;