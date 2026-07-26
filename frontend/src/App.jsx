import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import Home from "./pages/Home";
import Resumes from "./pages/Resumes";
import Jobs from "./pages/Jobs";
import Profile from "./pages/Profile";
import ResumeDetails from "./pages/ResumeDetails";
import Analysis from "./pages/Analysis";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />

        <Route path="/register" element={<Register />} />

        <Route path="/dashboard" element={<Dashboard />}>
          <Route index element={<Home />} />
          <Route path="resumes" element={<Resumes />} />
          <Route path="jobs" element={<Jobs />} />
          <Route path="profile" element={<Profile />} />
          <Route path="resume/:id" element={<ResumeDetails />} />
          <Route path="analysis/:id" element={<Analysis />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;