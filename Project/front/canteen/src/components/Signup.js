import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./style.css";

function Signup() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = { username, email, password, roles: ["user"] };
    const response = await axios.post("http://localhost:8080/api/auth/signup", data);
    if (response.status === 200) {
      console.log("Signup successful");
      navigate("/");
    } else {
      console.log("Signup failed");
    }
  };

  return (
    <div className="container">
      <h2>Signup</h2>
      <form onSubmit={handleSubmit} className="form">
        <label>
          Username:
          <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} className="input" />
        </label>
        <label>
          Email:
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} className="input" />
        </label>
        <label>
          Password:
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} className="input" />
        </label>
        <input type="submit" value="Submit" className="button" />
      </form>
      <p>Already have an account? <Link to="/login">Log in</Link></p>
    </div>
  );
}  

export default Signup;

