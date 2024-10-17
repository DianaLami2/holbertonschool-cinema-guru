// src/routes/auth/Login.js
import React from 'react';
import './auth.css'; // Import auth.css
import Input from '../../components/general/Input'; // Import the Input component
import Button from '../../components/general/Button'; // Import the Button component

const Login = ({ username, password, setUsername, setPassword, handleSubmit }) => {
    return (
        <form onSubmit={handleSubmit} className="auth-form">
            <Input
                label="Username"
                type="text"
                className="auth-input"
                value={username}
                setValue={setUsername}
                placeholder="Enter your username"
            />
            <Input
                label="Password"
                type="password"
                className="auth-input"
                value={password}
                setValue={setPassword}
                placeholder="Enter your password"
            />
            <Button
                label="Submit"
                className="auth-button"
                onClick={handleSubmit} // This will trigger the form submit
            />
        </form>
    );
};

export default Login;
