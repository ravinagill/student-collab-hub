import React, { useState, useContext } from "react";
import { AuthContext } from "../context/AuthContext"; // Adjust path if needed

// We pass onClose so we can close the modal after a successful login
function LoginForm({ onClose }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login } = useContext(AuthContext);

  const handleSubmit = (event) => {
    event.preventDefault();
    const isLoggedIn = login(email, password);
    if (isLoggedIn) {
      onClose(); // Close the modal on success
    } else {
      alert("Invalid email or password");
    }
  };

  return (
    <div style={styles.container}>
      <h2>Login</h2>
      <form onSubmit={handleSubmit} style={styles.form}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          style={styles.input}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          style={styles.input}
        />
        <button type="submit" style={styles.button}>
          Login
        </button>
      </form>
    </div>
  );
}

const styles = {
  container: {
    maxWidth: "400px",
    margin: "80px auto",
    padding: "30px",
    border: "1px solid #ccc",
    borderRadius: "8px",
    textAlign: "center",
  },
  form: { display: "flex", flexDirection: "column", gap: "15px" },
  input: {
    padding: "10px",
    fontSize: "16px",
    borderRadius: "4px",
    border: "1px solid #ccc",
  },
  button: {
    padding: "10px",
    fontSize: "16px",
    borderRadius: "4px",
    border: "none",
    backgroundColor: "#28a745",
    color: "#fff",
    cursor: "pointer",
  },
  error: { color: "red" },
};

export default LoginForm;
