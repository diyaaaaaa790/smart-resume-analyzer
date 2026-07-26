const express = require("express");
const router = express.Router();

const  protect = require("../middleware/authMiddleware");

const {
  createJob,
  getJobs,
  getJob,
  updateJob,
  deleteJob,
} = require("../controllers/jobController");

router.post("/", protect, createJob);

router.get("/", getJobs);

router.get("/:id", getJob);

router.put("/:id", protect, updateJob);

router.delete("/:id", protect, deleteJob);

module.exports = router;