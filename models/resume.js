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
      trim: true,
    },

    skills: [
      {
        type: String,
        trim: true,
      },
    ],

    education: {
      type: String,
      default: "",
    },

    experience: {
      type: String,
      default: "",
    },

    resumeText: {
      type: String,
      default: "",
    },

    fileUrl: {
      type: String,
      default: "",
    },

    aiScore: {
      type: Number,
      default: 0,
    },

    aiSuggestions: [
      {
        type: String,
      },
    ],
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Resume", resumeSchema);