const jobService = require("../services/jobService");

exports.createJob = async (req, res) => {
  try {
    const job = await jobService.createJob(req.body, req.user._id);

    res.status(201).json({
      success: true,
      data: job,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: err.message,
    });
  }
};

exports.getJobs = async (req, res) => {
  try {
    const jobs = await jobService.getJobs();

    res.json({
      success: true,
      count: jobs.length,
      data: jobs,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: err.message,
    });
  }
};

exports.getJob = async (req, res) => {
  try {
    const job = await jobService.getJobById(req.params.id);

    if (!job)
      return res.status(404).json({
        success: false,
        message: "Job not found",
      });

    res.json({
      success: true,
      data: job,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: err.message,
    });
  }
};

exports.updateJob = async (req, res) => {
  try {
    const job = await jobService.updateJob(req.params.id, req.body);

    res.json({
      success: true,
      data: job,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: err.message,
    });
  }
};

exports.deleteJob = async (req, res) => {
  try {
    await jobService.deleteJob(req.params.id);

    res.json({
      success: true,
      message: "Job deleted successfully",
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: err.message,
    });
  }
};