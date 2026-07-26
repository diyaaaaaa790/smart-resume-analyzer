import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import API from "../api/axios";
import {
  deleteResume,
  analyzeResume,
} from "../services/resumeService";

function Resumes() {
  const navigate = useNavigate();

  const [resumes, setResumes] = useState([]);

  const [form, setForm] = useState({
    title: "",
    resumeText: "",
    skills: "",
    education: "",
    experience: "",
  });

  // Fetch all resumes
  const fetchResumes = async () => {
    try {
      const res = await API.get("/resume");
      setResumes(res.data.data);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchResumes();
  }, []);

  // Form input
  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  // Add resume
  const addResume = async (e) => {
    e.preventDefault();

    try {
      await API.post("/resume", {
        ...form,
        skills: form.skills.split(",").map((skill) => skill.trim()),
      });

      alert("Resume Added Successfully!");

      setForm({
        title: "",
        resumeText: "",
        skills: "",
        education: "",
        experience: "",
      });

      fetchResumes();
    } catch (err) {
      console.error(err);
      alert("Failed to add resume.");
    }
  };

  // Delete resume
  const handleDelete = async (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this resume?"
    );

    if (!confirmDelete) return;

    try {
      await deleteResume(id);

      setResumes((prev) =>
        prev.filter((resume) => resume._id !== id)
      );

      alert("Resume Deleted Successfully!");
    } catch (err) {
      console.error(err);
      alert("Delete Failed");
    }
  };

  // AI Analysis
  const handleAnalyze = async (id) => {
    try {
      const res = await analyzeResume(id);

      const data = res.data.data;

      alert(`
Resume Score : ${data.resumeScore}

ATS Score : ${data.atsScore}

Summary:
${data.summary}

Strengths:
${data.strengths.join(", ")}

Weaknesses:
${data.weaknesses.join(", ")}

Missing Skills:
${data.missingSkills.join(", ")}

Career Suggestions:
${data.careerSuggestions.join(", ")}
      `);
    } catch (err) {
      console.error(err);
      alert("AI Analysis Failed");
    }
  };

  return (
    <div>
      <h1>My Resumes</h1>

      <form onSubmit={addResume}>
        <input
          type="text"
          name="title"
          placeholder="Resume Title"
          value={form.title}
          onChange={handleChange}
          required
        />

        <textarea
          name="resumeText"
          placeholder="Paste Resume Text"
          value={form.resumeText}
          onChange={handleChange}
          required
        />

        <input
          type="text"
          name="skills"
          placeholder="Java, React, Node"
          value={form.skills}
          onChange={handleChange}
          required
        />

        <input
          type="text"
          name="education"
          placeholder="Education"
          value={form.education}
          onChange={handleChange}
          required
        />

        <input
          type="text"
          name="experience"
          placeholder="Experience"
          value={form.experience}
          onChange={handleChange}
          required
        />

        <button type="submit">
          Add Resume
        </button>
      </form>

      <hr />

      {resumes.length === 0 ? (
        <h3>No Resumes Found</h3>
      ) : (
        resumes.map((resume) => (
          <div className="resume-card" key={resume._id}>
            <h2>{resume.title}</h2>

            <p>
              <strong>Education:</strong>{" "}
              {resume.education}
            </p>

            <p>
              <strong>Experience:</strong>{" "}
              {resume.experience}
            </p>

            <p>
              <strong>Skills:</strong>
            </p>

            <div className="skill-container">
              {resume.skills &&
                resume.skills.map((skill, index) => (
                  <span
                    key={index}
                    className="skill"
                  >
                    {skill}
                  </span>
                ))}
            </div>

            <div className="resume-buttons">
              <button
                className="view"
                onClick={() =>
                  navigate(`/dashboard/resume/${resume._id}`)
                }
              >
                View
              </button>

              <button
  className="analyze"
  onClick={() =>
    navigate(`/dashboard/analysis/${resume._id}`)
  }
>
  Analyze
</button>

              <button
                className="delete"
                onClick={() =>
                  handleDelete(resume._id)
                }
              >
                Delete
              </button>
            </div>
          </div>
        ))
      )}
    </div>
  );
}

export default Resumes;