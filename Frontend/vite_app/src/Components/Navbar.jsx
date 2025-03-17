
import React, { useState } from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import { FiMenu, FiX } from "react-icons/fi";
// import { useLocation } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import { useSelector, useDispatch } from "react-redux";
import { logoutUser } from "../authentication/authSlice.jsx";
import "./Nav.css";

const Navbar = () => {
  const { loginWithRedirect, logout, isAuthenticated, user } = useAuth0();
  const [menuOpen, setMenuOpen] = useState(false);
  // const location = useLocation();
  const cartItems = useSelector((state) => state.cart.items);

  const dispatch = useDispatch();
  const user1 = useSelector((state) => state.auth.user); // Get user from Redux

  const navigate = useNavigate();
  const handleLogout = () => {
    dispatch(logoutUser());
    navigate("/");
  };


  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          {/* Left Section - Logo */}
          <div className="logo"><img src="https://res.cloudinary.com/doqzxuxb1/image/upload/v1740719490/Cloudinary%20images/fskjyvdzsk1tmmkue1mg.jpg" alt="" /></div>

          {/* Middle Section - Navigation Menu */}
          <ul className={menuOpen ? "nav-menu active" : "nav-menu"}>
            <li><Link to="/" className="nav-link">Home</Link></li>
            <li><Link to="/hostel" className="nav-link">Hostel</Link></li>
            <li><Link to="/community" className="nav-link">Community</Link></li>
            <li><Link to="/meals" className="nav-link">Meal</Link></li>
          </ul>




          {/*By Jwt Token authentrication*/}
          <div className="auth-buttons">
            {user1 || isAuthenticated ? (
              <div className="profile-menu">

              
                  <Link to="/profile">Profile</Link>

                  {isAuthenticated ? (
                    
              <button 
                onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })} 
                className="logout-button"
              > 
              
                Log Out
              </button>
            ) : (
              
              <button onClick={handleLogout } className="logout-button">
                Log out
              </button>
              
            )}
              
              </div>
            ) : (
              <Link to="/mainlogin">Login</Link>
            )}
          </div>


          
         
          {/* By auth0 authentication */}
           


          <div className="cart">
            <Link to="/cart"><FaShoppingCart className="carticon" />({cartItems.length})</Link> {/* ✅ Show item count */}

          </div>

          {/* Mobile Menu Button */}
          <button className="menu-icon" onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <FiX size={28} /> : <FiMenu size={28} />}
          </button>
        </div>
      </nav>

      <Outlet />
    </>
  );
};

export default Navbar;