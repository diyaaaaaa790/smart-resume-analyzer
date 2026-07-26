const express = require("express");

const router = express.Router();

const resumeController = require("../controllers/resumeController");
const protect = require("../middleware/authMiddleware");

console.log("protect:", typeof protect);
console.log("getResumes:", typeof resumeController.getResumes);
console.log("createResume:", typeof resumeController.createResume);

router.get("/", protect, resumeController.getResumes);

router.post("/", protect, resumeController.createResume);

router.put("/:id", protect, resumeController.updateResume);

router.delete("/:id", protect, resumeController.deleteResume);

module.exports = router;