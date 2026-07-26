import { useEffect, useState } from "react";
import API from "../api/axios";

function Profile() {
  const [user, setUser] = useState(null);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const res = await API.get("/auth/profile");

        setUser(res.data.user);
      } catch (err) {
        console.error("Profile error:", err);
        setError("Failed to load profile");
      }
    };

    fetchProfile();
  }, []);

  if (error) {
    return <h2>{error}</h2>;
  }

  if (!user) {
    return <h2>Loading...</h2>;
  }

  return (
    <div className="profile-page">
      <h1>My Profile</h1>

      <div className="profile-card">
        <div className="profile-row">
          <strong>Name</strong>
          <span>{user.name}</span>
        </div>

        <div className="profile-row">
          <strong>Email</strong>
          <span>{user.email}</span>
        </div>

        <div className="profile-row">
          <strong>User ID</strong>
          <span>{user._id}</span>
        </div>
      </div>
    </div>
  );
}

export default Profile;