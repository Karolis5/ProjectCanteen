import axios from "axios";
import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { LoginContext } from "./LoginProvider"; // Import the LoginContext
import "./style.css";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const { setIsLoggedIn } = useContext(LoginContext); // Use the context

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = { username, password };
    const response = await axios.post("http://localhost:8080/api/auth/signin", data);
    if (response.status === 200) {
      console.log("Login successful");
      setIsLoggedIn(true); // Update the login state
      navigate("/"); // Navigate to the home page
    } else {
      console.log("Login failed");
    }
  };

  return (
    <div className="container">
      <h2>Login</h2>
      <form onSubmit={handleSubmit} className="form">
        <label>
          Username:
          <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} className="input" />
        </label>
        <label>
          Password:
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} className="input" />
        </label>
        <input type="submit" value="Submit" className="button" />
      </form>
      <p>Don't have an account? <Link to="/register">Register</Link></p>
    </div>
  );
}  


export default Login;
