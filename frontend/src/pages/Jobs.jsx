import { useState } from "react";

function Jobs() {
  const [jobs] = useState([
    {
      title: "Frontend Developer",
      company: "Google",
      location: "Bangalore",
      skills: "React, JavaScript, HTML, CSS",
    },
    {
      title: "Backend Developer",
      company: "Microsoft",
      location: "Hyderabad",
      skills: "Node.js, Express, MongoDB",
    },
    {
      title: "Full Stack Developer",
      company: "Amazon",
      location: "Chennai",
      skills: "React, Node.js, MongoDB",
    },
    {
      title: "Software Engineer",
      company: "Infosys",
      location: "Pune",
      skills: "Java, Spring Boot",
    },
    {
      title: "Java Developer",
      company: "TCS",
      location: "Mumbai",
      skills: "Java, SQL",
    },
    {
      title: "AI/ML Intern",
      company: "OpenAI",
      location: "Remote",
      skills: "Python, Machine Learning",
    },
  ]);

  return (
    <div>
      <h1>Recommended Jobs</h1>

      {jobs.map((job, index) => (
        <div key={index} className="resume-card">
          <h2>{job.title}</h2>

          <p>
            <strong>Company:</strong> {job.company}
          </p>

          <p>
            <strong>Location:</strong> {job.location}
          </p>

          <p>
            <strong>Required Skills:</strong> {job.skills}
          </p>

          <button
            onClick={() =>
              alert("Application feature can be integrated later.")
            }
          >
            Apply
          </button>
        </div>
      ))}
    </div>
  );
}

export default Jobs;