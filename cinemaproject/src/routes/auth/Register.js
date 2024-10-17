// src/routes/auth/Register.js
import React from 'react';
import './auth.css'; // Import auth.css

const Register = ({ username, password, setUsername, setPassword, handleSubmit }) => {
    return (
        <form onSubmit={handleSubmit} className="auth-form">
            <div className="input-group">
                <label htmlFor="username">Username</label>
                <input
                    type="text"
                    id="username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)} // Update username state
                    className="auth-input"
                    placeholder="Enter your username"
                    required
                />
            </div>
            <div className="input-group">
                <label htmlFor="password">Password</label>
                <input
                    type="password"
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)} // Update password state
                    className="auth-input"
                    placeholder="Enter your password"
                    required
                />
            </div>
            <button type="submit" className="auth-button">
                Submit
            </button>
        </form>
    );
};

export default Register;
