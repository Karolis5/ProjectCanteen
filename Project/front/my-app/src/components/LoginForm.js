import axios from 'axios';
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'; // Import Link

function LoginForm() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        const data = { username, password };
        try {
            const response = await axios.post('http://localhost:8080/api/user/login', data);
            console.log(response.data);
            navigate('/main');
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div>
            
            <form onSubmit={handleSubmit}>
                <input type="text" value={username} onChange={e => setUsername(e.target.value)} placeholder="Username" required />
                <input type="password" value={password} onChange={e => setPassword(e.target.value)} placeholder="Password" required />
                <button type="submit">Login</button>
                <Link to="/register">Don't have an account? Register here.</Link> 
            </form>
        </div>
    );
}

export default LoginForm;
