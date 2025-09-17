import React, { useState, useContext, useEffect } from "react";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import "./LoginForm.css";

function LoginForm({ onClose, onSignupClick }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isVisible, setIsVisible] = useState(false);
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    const isLoggedIn = login(email, password);
    if (isLoggedIn) {
      onClose();
      navigate("/dashboard");
    } else {
      alert("Invalid email or password");
    }
  };

  const handleClose = () => {
    setIsVisible(false);
    setTimeout(() => onClose(), 300);
  };

  return (
    <div className={`login-overlay ${isVisible ? "visible" : ""}`}>
      <div className="login-background">
        <div className="floating-shapes">
          <div className="shape shape-1"></div>
          <div className="shape shape-2"></div>
          <div className="shape shape-3"></div>
          <div className="shape shape-4"></div>
          <div className="shape shape-5"></div>
          <div className="shape shape-6"></div>
        </div>

        <div className={`login-container ${isVisible ? "slide-in" : ""}`}>
          <button className="close-btn" onClick={handleClose}>
            ×
          </button>

          <div className="login-header">
            <h2 className="login-title">Welcome Back!</h2>
            <p className="login-subtitle">Sign in to continue to Link Lab</p>
          </div>

          <form onSubmit={handleSubmit} className="login-form">
            <div className="input-group">
              <div className="input-wrapper">
                <input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="login-input"
                />
                <div className="input-line"></div>
              </div>
            </div>

            <div className="input-group">
              <div className="input-wrapper">
                <input
                  type="password"
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  className="login-input"
                />
                <div className="input-line"></div>
              </div>
            </div>

            <button type="submit" className="login-button">
              <span>Sign In</span>
              <div className="button-ripple"></div>
            </button>
          </form>

          <div className="login-footer">
            <p>
              Don't have an account?{" "}
              <span className="link" onClick={() => {
                handleClose();
                if (onSignupClick) setTimeout(onSignupClick, 300);
              }}>
                Sign up here
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginForm;
