// src/App.js
import React, { useState, useEffect } from 'react';
import './App.css'; // Import App.css
import axios from 'axios';
import Dashboard from './components/Dashboard'; // Placeholder for Dashboard component
import Authentication from './routes/auth/Authentication'; // Import Authentication component

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false); // State for login status
  const [userUsername, setUserUsername] = useState(""); // State for username

  useEffect(() => {
    const accessToken = localStorage.getItem('accessToken'); // Get accessToken from localStorage

    if (accessToken) {
      // Send POST request to /api/auth/ with authorization header
      axios.post('/api/auth/', {}, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      })
        .then(response => {
          // On success, set login state and username
          setIsLoggedIn(true);
          setUserUsername(response.data.username); // Assuming the response contains username
        })
        .catch(error => {
          console.error('Authentication error:', error);
          // Handle error as necessary (e.g., set isLoggedIn to false)
        });
    }
  }, []);

  // Return Dashboard or Authentication component based on login state
  return (
    <div className="App">
      {isLoggedIn ? (
        <Dashboard username={userUsername} />
      ) : (
        <Authentication
          setIsLoggedIn={setIsLoggedIn}
          setUserUsername={setUserUsername}
        />
      )}
    </div>
  );
};

export default App;
