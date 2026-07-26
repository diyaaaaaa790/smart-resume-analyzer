const Job = require("../models/Job");

const createJob = async (data, userId) => {
  return await Job.create({
    ...data,
    createdBy: userId,
  });
};

const getJobs = async () => {
  return await Job.find().sort({ createdAt: -1 });
};

const getJobById = async (id) => {
  return await Job.findById(id);
};

const updateJob = async (id, data) => {
  return await Job.findByIdAndUpdate(id, data, {
    new: true,
  });
};

const deleteJob = async (id) => {
  return await Job.findByIdAndDelete(id);
};

module.exports = {
  createJob,
  getJobs,
  getJobById,
  updateJob,
  deleteJob,
};