// src/routes/auth/Authentication.js

import React from 'react';
import Login from './Login';
import Register from './Register';
import './auth.css'; // Import CSS for authentication

const Authentication = () => {
    return (
        <div className="authentication-container">
            <h1>Welcome to Cinema Guru</h1>
            <div className="auth-options">
                <Login />
                <Register />
            </div>
        </div>
    );
};

export default Authentication;
