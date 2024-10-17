// src/routes/auth/Authentication.js
import React, { useState } from 'react';
import axios from 'axios';
import './auth.css'; // Import auth.css
import Login from './Login'; // Import Login component
import Register from './Register'; // Import Register component

const Authentication = ({ setIsLoggedIn, setUserUsername }) => {
    const [_switch, setSwitch] = useState(true); // State to toggle between Login and Register
    const [username, setUsername] = useState(""); // State for username
    const [password, setPassword] = useState(""); // State for password

    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault(); // Prevent default form submission behavior

        const endpoint = _switch ? '/api/auth/login' : '/api/auth/register'; // Determine endpoint based on _switch

        // Send POST request to the appropriate endpoint
        axios.post(endpoint, { username, password })
            .then(response => {
                const { accessToken } = response.data; // Extract accessToken from response

                // Store token in localStorage
                localStorage.setItem('accessToken', accessToken);

                // Update state with username and set logged-in status
                setUserUsername(username);
                setIsLoggedIn(true);
            })
            .catch(error => {
                console.error('Authentication error:', error);
                // Handle error (e.g., show an error message to the user)
            });
    };

    return (
        <div className="auth-container">
            <header className="auth-header">
                <button onClick={() => setSwitch(true)} className={`auth-toggle ${_switch ? 'active' : ''}`}>
                    Sign In
                </button>
                <button onClick={() => setSwitch(false)} className={`auth-toggle ${!_switch ? 'active' : ''}`}>
                    Sign Up
                </button>
            </header>
            <form onSubmit={handleSubmit}> {/* Bind handleSubmit to the form's onSubmit */}
                {_switch ? (
                    <Login
                        username={username}
                        password={password}
                        setUsername={setUsername}
                        setPassword={setPassword}
                    />
                ) : (
                    <Register
                        username={username}
                        password={password}
                        setUsername={setUsername}
                        setPassword={setPassword}
                    />
                )}
                <button type="submit" className="submit-button">
                    {_switch ? 'Login' : 'Register'}
                </button>
            </form>
        </div>
    );
};

export default Authentication;
