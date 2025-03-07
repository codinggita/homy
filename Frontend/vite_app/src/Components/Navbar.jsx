
import React, { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import { FiMenu, FiX } from "react-icons/fi";
import { useLocation } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import { useSelector } from "react-redux";
import "./Nav.css";

const Navbar = () => {
  const { loginWithRedirect, logout, isAuthenticated, user } = useAuth0();
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const cartItems = useSelector((state) => state.cart.items);


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




          {/* Right Section - Auth Buttons */}
          <div className="auth-buttons">
            <button className="login-button"><Link to="/login" className="nav-link"> Login</Link></button>


            {/* {isAuthenticated && (
              <p className="user-welcome">Welcome, {user.name}</p>
              
            )}
            
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
              
            )} */}
          </div>


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