// src/routes/dashboard/Dashboard.js
import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'; // Import routing components
import './dashboard.css'; // Import dashboard CSS
import Header from '../../components/navigation/Header'; // Import Header component
import SideBar from '../../components/navigation/SideBar'; // Import SideBar component
import HomePage from '../home/HomePage'; // Import HomePage component (to be created)
import Favorites from '../favorites/Favorites'; // Import Favorites component (to be created)
import WatchLater from '../watchlater/WatchLater'; // Import WatchLater component (to be created)

const Dashboard = ({ userUsername, setIsLoggedIn }) => {
    return (
        <BrowserRouter>
            <div className="dashboard">
                <Header userUsername={userUsername} setIsLoggedIn={setIsLoggedIn} />
                <div className="dashboard-content">
                    <SideBar />
                    <div className="main-content">
                        <Routes>
                            <Route path="/home" element={<HomePage />} /> {/* Route to HomePage */}
                            <Route path="/favorites" element={<Favorites />} /> {/* Route to Favorites */}
                            <Route path="/watchlater" element={<WatchLater />} /> {/* Route to WatchLater */}
                            <Route path="*" element={<Navigate to="/home" />} /> {/* Redirect all other paths to /home */}
                        </Routes>
                    </div>
                </div>
            </div>
        </BrowserRouter>
    );
};

export default Dashboard;
