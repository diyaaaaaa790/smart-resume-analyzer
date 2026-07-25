# API

POST /api/resume/analyze
- Body: { "text": "...resume text..." }
- Response: { "summary": "...", "skills": [ ... ] }

GET /health
- Response: { "status": "ok", "message": "Resume Analyzer API is running" }
