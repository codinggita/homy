import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { useNavigate } from "react-router-dom";
import "./Login.css"
const Login=()=>{
    const { loginWithRedirect, logout, isAuthenticated, user } = useAuth0();
    const navigate = useNavigate();

    const handleSearch=()=>{
        navigate('/hostel')
    };

    return(<>
    <div className="maindiv">
    <div className="loginbyauth">
    <div className="auth-buttons">
            {isAuthenticated && (
              <p className="user-welcome">Welcome, {user.name}</p>
              
            )}
            
             {/* {console.log(user)} */}
            {isAuthenticated ? (
              <button 
                onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })} 
                className="logout-button"
              >
                Log Out
              </button>
            ) : (
              <button onClick={loginWithRedirect} className="login-button">
                Log In
              </button>
              
            )}
          </div>
     </div>

     <div className="loginbyjwt">
       <button onClick={handleSearch} className="newbutton">click me</button>
     </div>


    </div>

    </>)
};
export default Login;