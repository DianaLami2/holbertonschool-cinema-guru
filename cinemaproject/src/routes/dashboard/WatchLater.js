// src/routes/dashboard/WatchLater.js

import React, { useEffect, useState } from 'react';
import './dashboard.css';
import MovieCard from '../components/movies/MovieCard';
import axios from 'axios';

const WatchLater = () => {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        const fetchWatchLater = async () => {
            try {
                const response = await axios.get('/api/titles/watchlater/');
                setMovies(response.data); // Set movies to the response data
            } catch (error) {
                console.error("Error fetching watch later movies:", error);
            }
        };

        fetchWatchLater(); // Call the fetch function on component mount
    }, []); // Empty dependency array means this runs once on mount

    return (
        <div className="watch-later-page">
            <h1>Movies you want to watch later</h1>
            <ul className="movie-list">
                {movies.map((movie) => (
                    <MovieCard key={movie.imdbId} movie={movie} />
                ))}
            </ul>
        </div>
    );
};

export default WatchLater;
