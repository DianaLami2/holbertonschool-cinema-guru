// src/components/navigation/Navigation.js
import React from 'react';
import { Link } from 'react-router-dom'; // Assuming you're using React Router for navigation
import './navigation.css'; // Import the navigation CSS

const Navigation = ({ username }) => {
    return (
        <nav className="nav-container">
            <Link to="/" className="nav-logo">MyApp</Link>
            <div className="nav-links">
                <Link to="/dashboard" className="nav-link">Dashboard</Link>
                <Link to="/profile" className="nav-link">Profile</Link>
                <Link to="/logout" className="nav-link">Logout</Link>
            </div>
        </nav>
    );
};

export default Navigation;
