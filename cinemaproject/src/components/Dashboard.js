// src/routes/dashboard/Dashboard.js
import React from 'react';
import './dashboard.css'; // Import dashboard CSS
import Header from '../../components/navigation/Header'; // Import Header component
import SideBar from '../../components/navigation/SideBar'; // Import SideBar component

const Dashboard = ({ userUsername, setIsLoggedIn }) => {
    return (
        <div className="dashboard">
            <Header userUsername={userUsername} setIsLoggedIn={setIsLoggedIn} />
            <div className="dashboard-content">
                <SideBar /> {/* Add SideBar component */}
                <div className="main-content">
                    {/* Here you can add other components or content for the main area */}
                    <h2>Welcome to the Dashboard</h2>
                    {/* More content can be added here */}
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
