// src/routes/auth/Register.js

import React, { useState } from 'react';
import './auth.css'; // Import CSS for authentication

const Register = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleRegister = (e) => {
        e.preventDefault();
        // Implement register logic here
        console.log('Register:', { username, password });
    };

    return (
        <form className="auth-form" onSubmit={handleRegister}>
            <h2>Register</h2>
            <label>
                Username:
                <input
                    type="text"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    required
                />
            </label>
            <label>
                Password:
                <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
            </label>
            <button type="submit">Register</button>
        </form>
    );
};

export default Register;
