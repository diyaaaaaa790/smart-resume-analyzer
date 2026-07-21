// Basic controller placeholder for resume processing

exports.analyze = (req, res) => {
  // Placeholder: accept resume text and return mock analysis
  const { text } = req.body;
  if (!text) return res.status(400).json({ error: 'No resume text provided' });

  // Very simple keyword-based mock analysis
  const skills = [];
  const keywords = ['javascript', 'node', 'python', 'java', 'sql', 'react', 'aws'];
  const lower = text.toLowerCase();
  keywords.forEach(k => {
    if (lower.includes(k)) skills.push(k);
  });

  res.json({ summary: 'Mock analysis complete', skills });
};
