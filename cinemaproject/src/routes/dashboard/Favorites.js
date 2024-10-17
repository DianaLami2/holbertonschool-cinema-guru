// src/routes/dashboard/Favorites.js

import React, { useEffect, useState } from 'react';
import './dashboard.css';
import MovieCard from '../components/movies/MovieCard';
import axios from 'axios';

const Favorites = () => {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        const fetchFavorites = async () => {
            try {
                const response = await axios.get('/api/titles/favorite/');
                setMovies(response.data); // Set movies to the response data
            } catch (error) {
                console.error("Error fetching favorite movies:", error);
            }
        };

        fetchFavorites(); // Call the fetch function on component mount
    }, []); // Empty dependency array means this runs once on mount

    return (
        <div className="favorites-page">
            <h1>Movies you like</h1>
            <ul className="movie-list">
                {movies.map((movie) => (
                    <MovieCard key={movie.imdbId} movie={movie} />
                ))}
            </ul>
        </div>
    );
};

export default Favorites;
