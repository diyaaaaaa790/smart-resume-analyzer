import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import API from "../api/axios";

function ResumeDetails() {
  const { id } = useParams();

  const [resume, setResume] = useState(null);

  useEffect(() => {
    const fetchResume = async () => {
      try {
        const res = await API.get(`/resume/${id}`);
        setResume(res.data.data);
      } catch (err) {
        console.log(err);
      }
    };

    fetchResume();
  }, [id]);

  if (!resume) {
    return <h2>Loading...</h2>;
  }

  return (
    <div className="resume-details">
      <h1>{resume.title}</h1>

      <hr />

      <h3>Education</h3>
      <p>{resume.education}</p>

      <h3>Experience</h3>
      <p>{resume.experience}</p>

      <h3>Skills</h3>

      <div className="skill-container">
        {resume.skills.map((skill, index) => (
          <span key={index} className="skill">
            {skill}
          </span>
        ))}
      </div>

      <h3>Resume</h3>

      <p>{resume.resumeText}</p>

      <hr />

      <h2>🤖 AI Analysis</h2>

      <p>Coming Soon...</p>
    </div>
  );
}

export default ResumeDetails;