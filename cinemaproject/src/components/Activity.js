// src/components/Activity.js
import React from 'react';
import './components.css'; // Import the CSS for components

const Activity = ({ activity }) => {
    return (
        <li className="activity-item"> {/* Add a class for styling */}
            <p>{activity}</p> {/* Render the activity passed as a prop */}
        </li>
    );
};

export default Activity;
