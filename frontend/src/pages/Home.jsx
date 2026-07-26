function Home() {
  return (
    <>
      <h1>Dashboard</h1>
      <p>Welcome to Smart Resume Analyzer</p>

      <div className="cards">
        <div className="card">
          <h2>📄 Resumes</h2>
          <p>Manage your resumes</p>
        </div>

        <div className="card">
          <h2>💼 Jobs</h2>
          <p>View job openings</p>
        </div>

        <div className="card">
          <h2>🤖 AI Analysis</h2>
          <p>Analyze your resume</p>
        </div>
      </div>
    </>
  );
}

export default Home;