import axios from 'axios';
import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Import Link

function RegistrationForm() {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [errorMessage, setErrorMessage] = useState(""); // Add this line

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (password !== confirmPassword) {
            alert("Passwords do not match");
            return;
        }
        const data = { username, email, password };
        try {
            const response = await axios.post('http://localhost:8080/api/user/register', data);
            console.log(response.data);
            setErrorMessage(""); // Clear the error message upon successful registration
        } catch (error) {
            console.error(error);
            if (error.response && error.response.status === 409) {
                setErrorMessage("Username is already registered"); // Set the error message if username is already registered
            }
        }
    };

    return (
        <form onSubmit={handleSubmit} className="registration-form">
            <input type="text" value={username} onChange={e => setUsername(e.target.value)} placeholder="Username" required />
            <input type="email" value={email} onChange={e => setEmail(e.target.value)} placeholder="Email" required />
            <input type="password" value={password} onChange={e => setPassword(e.target.value)} placeholder="Password" required />
            <input type="password" value={confirmPassword} onChange={e => setConfirmPassword(e.target.value)} placeholder="Confirm Password" required />
            {errorMessage && <div style={{color: 'red'}}>{errorMessage}</div>} {/* Display the error message in red */}
            <button type="submit">Register</button>
            <Link to="/login">Don't have an account? Register here.</Link> 
        </form>
    );
}

export default RegistrationForm;
