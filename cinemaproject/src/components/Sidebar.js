// src/components/navigation/SideBar.js
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for navigation
import axios from 'axios'; // Import axios for making requests
import './navigation.css'; // Import the CSS for navigation
import Activity from '../Activity'; // Import the Activity component

const SideBar = () => {
    const navigate = useNavigate(); // Initialize useNavigate
    const [selected, setSelected] = useState('home'); // State for selected page
    const [small, setSmall] = useState(true); // State for small boolean
    const [activities, setActivities] = useState([]); // State for activities array
    const [showActivities, setShowActivities] = useState(false); // State for showing activities

    // Function to set the page
    const setPage = (pageName) => {
        setSelected(pageName);
        navigate(`/${pageName.toLowerCase().replace(' ', '')}`); // Redirect to the corresponding page
    };

    // Fetch activities when the component mounts
    useEffect(() => {
        axios.get('/api/activity')
            .then(response => {
                setActivities(response.data); // Set activities state to the response data
            })
            .catch(error => {
                console.error('Error fetching activities:', error);
            });
    }, []);

    return (
        <nav className="sidebar">
            <ul className="navigation">
                {/* Navigation Links */}
                <li onClick={() => setPage('Home')}>Home</li>
                <li onClick={() => setPage('Favorites')}>Favorites</li>
                <li onClick={() => setPage('Watch Later')}>Watch Later</li>
            </ul>
            <ul className="activity-list">
                {/* Map the first 10 activities to Activity component */}
                {activities.slice(0, 10).map((activity, index) => (
                    <Activity key={index} activity={activity} />
                ))}
            </ul>
        </nav>
    );
};

export default SideBar;
