import React, { useState, useContext, useEffect } from "react";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import "./SignupForm.css"; // Make sure to create this CSS file

const Signup = () => {
  const { signup } = useContext(AuthContext);
  const navigate = useNavigate();
  
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleSignup = (e) => {
    e.preventDefault();
    const success = signup(name, email, password);
    if (success) navigate("/dashboard");
    else setError("User already exists with this email");
  };

  return (
    <div className={`signup-overlay ${isVisible ? 'visible' : ''}`}>
      <div className="signup-background">
        <div className="floating-particles">
          <div className="particle particle-1"></div>
          <div className="particle particle-2"></div>
          <div className="particle particle-3"></div>
          <div className="particle particle-4"></div>
          <div className="particle particle-5"></div>
          <div className="particle particle-6"></div>
          <div className="particle particle-7"></div>
          <div className="particle particle-8"></div>
        </div>
        
        <div className={`signup-container ${isVisible ? 'fade-in' : ''}`}>
          <div className="signup-header">
            <h2 className="signup-title">Join Link Lab</h2>
            <p className="signup-subtitle">Create your account and start connecting</p>
          </div>

          <form onSubmit={handleSignup} className="signup-form">
            <div className="input-group">
              <div className="input-wrapper">
                <input
                  type="text"
                  placeholder="Full Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                  className="signup-input"
                />
                <div className="input-focus-line"></div>
              </div>
            </div>

            <div className="input-group">
              <div className="input-wrapper">
                <input
                  type="email"
                  placeholder="Email Address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="signup-input"
                />
                <div className="input-focus-line"></div>
              </div>
            </div>

            <div className="input-group">
              <div className="input-wrapper">
                <input
                  type="password"
                  placeholder="Create Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  className="signup-input"
                />
                <div className="input-focus-line"></div>
              </div>
            </div>

            <button type="submit" className="signup-button">
              <span>Create Account</span>
              <div className="button-glow"></div>
            </button>
          </form>

          {error && <p className="error-message">{error}</p>}

          <div className="signup-footer">
            <p>Already have an account? <span className="link">Sign in here</span></p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;