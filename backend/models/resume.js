const mongoose = require("mongoose");

const resumeSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },

    title: {
      type: String,
      required: true,
    },

    resumeText: {
      type: String,
      required: true,
    },

    skills: [
      {
        type: String,
      },
    ],

    education: String,

    experience: String,

    aiAnalysis: {
      resumeScore: Number,

      atsScore: Number,

      summary: String,

      strengths: [String],

      weaknesses: [String],

      missingSkills: [String],

      careerSuggestions: [String],
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Resume", resumeSchema);