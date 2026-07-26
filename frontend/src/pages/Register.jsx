import { useState } from "react";
import { useNavigate, NavLink } from "react-router-dom";
import API from "../api/axios";
import "../styles/auth.css";

function Register() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await API.post("/auth/register", form);

      alert("Registration Successful!");

      navigate("/");
    } catch (err) {
  console.log(err);

  console.log(err.response);

  alert(err.response?.data?.message || "Registration Failed");
}
  };

  return (
    <div className="auth-container">
      <div className="auth-card">

        <h1>Smart Resume Analyzer</h1>

        <h2>Register</h2>

        <form onSubmit={handleSubmit}>

          <input
            type="text"
            placeholder="Full Name"
            name="name"
            onChange={handleChange}
            required
          />

          <input
            type="email"
            placeholder="Email"
            name="email"
            onChange={handleChange}
            required
          />

          <input
            type="password"
            placeholder="Password"
            name="password"
            onChange={handleChange}
            required
          />

          <button type="submit">
            Register
          </button>

        </form>

        <p>
          Already have an account?
          <NavLink to="/"> Login</NavLink>
        </p>

      </div>
    </div>
  );
}

export default Register;