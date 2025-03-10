import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { logoutUser } from "./authSlice.jsx";
import { useNavigate } from "react-router-dom";

const Profile = () => {
  const { user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logoutUser());
    navigate("/login");
  };

  if (!user) {
    return <p>Please login to view your profile.</p>;
  }

  return (
    <div className="profile-container">
      <h2>Welcome, {user.name}!</h2>
      <p>Email: {user.email}</p>
      <p>Username:{user.username}</p>
      <p>userId:{user.user_id}</p>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default Profile;