import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { analyzeResume } from "../services/resumeService";

function Analysis() {
  const { id } = useParams();

  const [analysis, setAnalysis] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const loadAnalysis = async () => {
      try {
        setLoading(true);

        const response = await analyzeResume(id);

        setAnalysis(response.data.data);
      } catch (err) {
        console.error(err);

        setError(
          err.response?.data?.message ||
            "Failed to analyze resume."
        );
      } finally {
        setLoading(false);
      }
    };

    loadAnalysis();
  }, [id]);

  if (loading) {
    return (
      <div>
        <h1>AI Resume Analysis</h1>
        <p>AI is analyzing your resume...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div>
        <h1>AI Resume Analysis</h1>
        <p>{error}</p>
      </div>
    );
  }

  if (!analysis) {
    return <p>No analysis available.</p>;
  }

  return (
    <div>
      <h1>AI Resume Analysis</h1>

      <h2>
        Resume Score: {analysis.score}/100
      </h2>

      <h3>Summary</h3>
      <p>{analysis.summary}</p>

      <h3>Strengths</h3>

      <ul>
        {analysis.strengths?.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>

      <h3>Weaknesses</h3>

      <ul>
        {analysis.weaknesses?.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>

      <h3>Suggestions</h3>

      <ul>
        {analysis.suggestions?.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>

      <h3>Recommended Job Roles</h3>

      <ul>
        {analysis.matchedJobs?.map((job, index) => (
          <li key={index}>{job}</li>
        ))}
      </ul>
    </div>
  );
}

export default Analysis;