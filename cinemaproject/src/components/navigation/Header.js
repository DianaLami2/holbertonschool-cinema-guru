// src/components/navigation/Header.js
import React from 'react';
import './navigation.css'; // Import the navigation CSS

const Header = ({ userUsername, setIsLoggedIn }) => {
    // Logout function to handle user logout
    const logout = () => {
        localStorage.removeItem('accessToken'); // Remove the accessToken from localStorage
        setIsLoggedIn(false); // Set isLoggedIn state to false
    };

    return (
        <nav className="nav-container">
            <img src="https://picsum.photos/100/100" alt="User Avatar" className="user-avatar" />
            <p>Welcome, {userUsername}!</p>
            <span className="logout" onClick={logout}>
                <i className="fas fa-sign-out-alt"></i> Logout
            </span>
        </nav>
    );
};

export default Header;
