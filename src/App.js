import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Features from "./components/Features";
import About from "./components/About";
import FAQSection from "./components/FAQSection";
import Contact from "./components/Contact";
import Model from "./components/Model"; // Import the Modal
import LoginForm from "./pages/LoginForm.js"; // Import the Login Form
// import SignupForm from "./components/SignupForm"; // You'll create this

import "./App.css";
import Signup from "./components/Signup.js";

function App() {
  // State to manage which modal is open: null, 'login', or 'signup'
  const [modalOpen, setModalOpen] = useState(null);

  // Function to close the modal
  const closeModal = () => setModalOpen(null);

  return (
    <div>
      {/* Pass functions to Navbar to open the modals */}
      <Navbar
        onLoginClick={() => setModalOpen("login")}
        onSignupClick={() => setModalOpen("signup")}
      />
      <Home />
      <Features />
      <About />
      <FAQSection />
      <Contact />

      {/* Conditionally render the Modal */}
      {modalOpen && (
        <Model onClose={closeModal}>
          {modalOpen === "login" && <LoginForm onClose={closeModal} />}
          {modalOpen === "signup" && <Signup onClose={closeModal} />}
        </Model>
      )}
    </div>
  );
}

export default App;
