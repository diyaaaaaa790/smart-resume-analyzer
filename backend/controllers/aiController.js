const { GoogleGenerativeAI } = require("@google/generative-ai");
const Resume = require("../models/Resume");

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

const analyzeResume = async (req, res) => {
  try {
    console.log("AI ANALYSIS STARTED");
    console.log("Resume ID:", req.params.id);
    console.log("User ID:", req.user?._id);

    if (!process.env.GEMINI_API_KEY) {
      return res.status(500).json({
        success: false,
        message: "GEMINI_API_KEY is missing in backend .env",
      });
    }

    const resume = await Resume.findOne({
      _id: req.params.id,
      user: req.user._id,
    });

    if (!resume) {
      return res.status(404).json({
        success: false,
        message: "Resume not found or does not belong to this user",
      });
    }

    console.log("Resume found:", resume.title);

    const prompt = `
You are an expert technical recruiter and resume reviewer.

Analyze this resume:

Resume Title:
${resume.title}

Education:
${resume.education}

Experience:
${resume.experience}

Skills:
${
  Array.isArray(resume.skills)
    ? resume.skills.join(", ")
    : resume.skills
}

Resume Text:
${resume.resumeText}

Return ONLY valid JSON using exactly this structure:

{
  "score": 0,
  "summary": "",
  "strengths": [],
  "weaknesses": [],
  "suggestions": [],
  "matchedJobs": []
}

Rules:

- score must be an integer from 0 to 100.
- summary should briefly explain the resume quality.
- strengths should contain useful positive observations.
- weaknesses should identify actual problems.
- suggestions should provide practical improvements.
- matchedJobs should contain suitable job roles.
- Do not invent qualifications or experience.
- Keep the response concise and useful.
`;

    console.log("Calling Gemini...");

    const model = genAI.getGenerativeModel({
  model: "gemini-3.6-flash",
});

    const result = await model.generateContent(prompt);

    const text = result.response.text();

    console.log("Gemini response received");

    const cleanText = text
      .replace(/```json/g, "")
      .replace(/```/g, "")
      .trim();

    const analysis = JSON.parse(cleanText);

    return res.json({
      success: true,
      data: analysis,
    });

  } catch (error) {
    console.error("AI ANALYSIS ERROR:");
    console.error(error);

    return res.status(500).json({
      success: false,
      message: error.message || "AI analysis failed",
    });
  }
};

module.exports = {
  analyzeResume,
};