import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { logoutUser } from "./authSlice.jsx";
import { useNavigate } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";

const Profile = () => {
  const { user } = useSelector((state) => state.auth); // JWT user data from Redux
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isAuthenticated,  user: auth0User , logout } = useAuth0(); // Auth0 user data

  const handleJWTLogout = () => {
    dispatch(logoutUser());
    navigate("/hostel");
  };

  const handleAuth0Logout = () => {
    logout({ returnTo: window.location.origin });
  };
  return (
    <div className="profile-container">
      {user ? (
        <>
          <h2>Welcome, {user.username}!</h2>
          <p>Email: {user.email}</p>
          <p>Username: {user.username}</p>
          <p>User ID: {user.user_id}</p>
          <button onClick={handleJWTLogout}>Logout</button>
        </>
      ) : isAuthenticated ? (
        <>
          <h2>Welcome, {auth0User.name}!</h2>
          <p>Email: {auth0User.email}</p>
          <button onClick={handleAuth0Logout}>Logout</button>
        </>
      ) : (
        <p>Please log in to view your profile.</p>
      )}
    </div>
  );
};

export default Profile;
