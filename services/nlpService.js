// Minimal NLP service placeholder for extracting keywords

exports.extractKeywords = text => {
  if (!text) return [];
  const words = text.toLowerCase().match(/\b[a-z]{2,}\b/g) || [];
  const freq = {};
  words.forEach(w => { freq[w] = (freq[w] || 0) + 1; });
  const sorted = Object.keys(freq).sort((a,b) => freq[b]-freq[a]);
  return sorted.slice(0, 20);
};
