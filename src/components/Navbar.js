import React, { useContext } from "react";
import { AuthContext } from "../context/AuthContext"; // Make sure this path is correct
import "./Navbar.css";

// 1. Accept onLoginClick and onSignupClick as props
function Navbar({ onLoginClick, onSignupClick }) {
  // 2. Get the user and logout function from the AuthContext
  const { user, logout } = useContext(AuthContext);

  console.log(user);

  return (
    <nav className="navbar">
      <div className="logo">Link Lab</div>
      <ul className="nav-links">
        <li>
          <a href="#home">Home</a>
        </li>
        <li>
          <a href="#features">Features</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>

      {/* 3. Add a new section for authentication buttons */}
      <div className="auth-links">
        {user ? (
          // If the user is logged in, show their name and a logout button
          <>
            <span className="welcome-message">Welcome, {user.name}!</span>
            <button onClick={logout} className="nav-button">
              Logout
            </button>
          </>
        ) : (
          // If the user is not logged in, show Login and Sign Up buttons
          <>
            <button onClick={onLoginClick} className="nav-button">
              Login
            </button>
            <button onClick={onSignupClick} className="nav-button signup">
              Sign Up
            </button>
          </>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
