// Simple model placeholder for resume data

class Resume {
  constructor({ text, parsed = {} }) {
    this.text = text;
    this.parsed = parsed;
    this.createdAt = new Date();
  }
}

module.exports = Resume;
