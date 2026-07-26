const ai = require("../config/gemini");

const analyzeResume = async (resumeText) => {
  const prompt = `
You are an ATS Resume Expert.

Analyze the following resume.

Return ONLY valid JSON.

{
  "resumeScore":90,
  "atsScore":85,
  "summary":"...",
  "strengths":["..."],
  "weaknesses":["..."],
  "missingSkills":["..."],
  "careerSuggestions":["..."]
}

Resume:
${resumeText}
`;

  const response = await ai.models.generateContent({
    model: "gemini-2.5-flash",
    contents: prompt,
  });

  return response.text;
};

module.exports = {
  analyzeResume,
};