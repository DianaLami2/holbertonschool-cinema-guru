// src/components/movies/MovieCard.js

import React, { useEffect, useState } from 'react';
import './movies.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faClock } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';

const MovieCard = ({ movie }) => {
    const [isFavorite, setIsFavorite] = useState(false);
    const [isWatchLater, setIsWatchLater] = useState(false);

    useEffect(() => {
        const checkFavoritesAndWatchLater = async () => {
            try {
                const favoritesResponse = await axios.get('/api/titles/favorite/');
                const watchLaterResponse = await axios.get('/api/titles/watchlater/');

                const favorites = favoritesResponse.data;
                const watchLater = watchLaterResponse.data;

                setIsFavorite(favorites.some((fav) => fav.imdbId === movie.imdbId));
                setIsWatchLater(watchLater.some((watch) => watch.imdbId === movie.imdbId));
            } catch (error) {
                console.error("Error fetching favorites and watch later:", error);
            }
        };

        checkFavoritesAndWatchLater();
    }, [movie.imdbId]);

    const handleClick = async (type) => {
        const url = `/api/titles/${type}/${movie.imdbId}`;
        try {
            if (type === 'favorite') {
                if (isFavorite) {
                    await axios.delete(url);
                    setIsFavorite(false);
                } else {
                    await axios.post(url);
                    setIsFavorite(true);
                }
            } else if (type === 'watchlater') {
                if (isWatchLater) {
                    await axios.delete(url);
                    setIsWatchLater(false);
                } else {
                    await axios.post(url);
                    setIsWatchLater(true);
                }
            }
        } catch (error) {
            console.error(`Error updating ${type}:`, error);
        }
    };

    return (
        <li className="movie-card">
            <h3>{movie.title}</h3>
            <p>{movie.synopsis}</p>
            <p>Genres: {movie.genres.join(', ')}</p>

            <div className="movie-actions">
                <FontAwesomeIcon
                    icon={faHeart}
                    className={`action-icon ${isFavorite ? 'active' : ''}`}
                    onClick={() => handleClick('favorite')}
                />
                <FontAwesomeIcon
                    icon={faClock}
                    className={`action-icon ${isWatchLater ? 'active' : ''}`}
                    onClick={() => handleClick('watchlater')}
                />
            </div>
        </li>
    );
};

export default MovieCard;
