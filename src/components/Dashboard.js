import React, { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const { user, logout } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  console.log(user);

  return (
    <div style={styles.container}>
      <h2>Welcome, {user?.name} 🎉</h2>
      <p>Email: {user?.email}</p>
      <button style={styles.button} onClick={handleLogout}>
        Logout
      </button>
    </div>
  );
};

const styles = {
  container: {
    maxWidth: "500px",
    margin: "80px auto",
    padding: "30px",
    border: "1px solid #ccc",
    borderRadius: "8px",
    textAlign: "center",
  },
  button: {
    padding: "10px 20px",
    fontSize: "16px",
    borderRadius: "4px",
    border: "none",
    backgroundColor: "#dc3545",
    color: "#fff",
    cursor: "pointer",
    marginTop: "15px",
  },
};

export default Dashboard;
