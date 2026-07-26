const mongoose = require("mongoose");

const jobSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },

    company: {
      type: String,
      required: true,
      trim: true,
    },

    location: {
      type: String,
      default: "Remote",
    },

    description: {
      type: String,
      required: true,
    },

    requiredSkills: [
      {
        type: String,
      },
    ],

    salary: {
      type: String,
      default: "Not Disclosed",
    },

    createdBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
  },
  {
    timestamps: true,
  }
);

jobSchema.index({ title: "text", company: "text" });

module.exports = mongoose.model("Job", jobSchema);