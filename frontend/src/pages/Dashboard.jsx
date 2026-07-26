import { NavLink, Outlet, useNavigate } from "react-router-dom";
import "../styles/dashboard.css";

function Dashboard() {
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("token");
    navigate("/");
  };

  return (
    <div className="dashboard">
      <aside className="sidebar">
        <h2>📄 Smart Resume Analyzer</h2>

        <NavLink to="/dashboard">🏠 Dashboard</NavLink>

        <NavLink to="/dashboard/resumes">📄 My Resumes</NavLink>

        <NavLink to="/dashboard/jobs">💼 Jobs</NavLink>

        <NavLink to="/dashboard/profile">👤 Profile</NavLink>

        <button onClick={logout}>Logout</button>
      </aside>

      <main className="content">
        <Outlet />
      </main>
    </div>
  );
}

export default Dashboard;