const express = require('express');
const dotenv = require('dotenv');
const resumeRoutes = require('./routes/resumeRoutes');
const errorHandler = require('./middleware/errorHandler');

dotenv.config();

const app = express();

app.use(express.json());

app.use('/api/resume', resumeRoutes);

app.get('/health', (req, res) => {
  res.json({ status: 'ok', message: 'Resume Analyzer API is running' });
});

app.use(errorHandler);

module.exports = app;
