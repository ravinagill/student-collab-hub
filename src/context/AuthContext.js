import React, { createContext, useState, useEffect } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) setUser(JSON.parse(storedUser));
  }, []);

  const login = (email, password) => {
    const storedUsers = JSON.parse(localStorage.getItem("users")) || [];
    const existingUser = storedUsers.find(
      (u) => u.email === email && u.password === password
    );
    console.log(existingUser);
    if (existingUser) {
      console.log("new user", existingUser);
      setUser(existingUser);
      localStorage.setItem("user", JSON.stringify(existingUser));
      return true;
    }
    return false;
  };

  const signup = (name, email, password) => {
    const storedUsers = JSON.parse(localStorage.getItem("users")) || [];
    const userExists = storedUsers.find((u) => u.email === email);
    console.log(storedUsers);
    if (userExists) return false;

    const newUser = { name, email, password };
    storedUsers.push(newUser);
    localStorage.setItem("users", JSON.stringify(storedUsers));
    setUser(newUser);
    localStorage.setItem("user", JSON.stringify(newUser));
    return true;
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("user");
  };

  return (
    <AuthContext.Provider value={{ user, login, signup, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
