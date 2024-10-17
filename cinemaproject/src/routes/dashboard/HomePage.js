// src/routes/dashboard/HomePage.js

import React, { useEffect, useState } from 'react';
import './dashboard.css';
import MovieCard from '../components/movies/MovieCard';
import Filter from '../components/movies/Filter';
import Button from '../components/general/Button';
import axios from 'axios';

const HomePage = () => {
    const [movies, setMovies] = useState([]);
    const [minYear, setMinYear] = useState(1970);
    const [maxYear, setMaxYear] = useState(2022);
    const [genres, setGenres] = useState([]);
    const [sort, setSort] = useState("");
    const [title, setTitle] = useState("");
    const [page, setPage] = useState(1);

    const loadMovies = async (pageParam) => {
        try {
            const response = await axios.get('/api/titles/advancedsearch', {
                params: {
                    minYear,
                    maxYear,
                    genres: genres.join(','), // Join the array into a string for the request
                    title,
                    sort,
                    page: pageParam,
                },
            });
            setMovies((prevMovies) => [...prevMovies, ...response.data]); // Append new movies to the existing list
        } catch (error) {
            console.error("Error loading movies:", error);
        }
    };

    useEffect(() => {
        loadMovies(page); // Load movies when the component mounts
    }, [minYear, maxYear, genres, sort, title, page]); // Re-run when these states change

    const handleLoadMore = () => {
        setPage((prevPage) => prevPage + 1); // Increment the page to load more movies
    };

    return (
        <div className="home-page">
            <Filter
                minYear={minYear}
                setMinYear={setMinYear}
                maxYear={maxYear}
                setMaxYear={setMaxYear}
                sort={sort}
                setSort={setSort}
                genres={genres}
                setGenres={setGenres}
                title={title}
                setTitle={setTitle}
            />
            <ul className="movie-list">
                {movies.map((movie) => (
                    <MovieCard key={movie.imdbId} movie={movie} />
                ))}
            </ul>
            <Button label="Load More.." onClick={handleLoadMore} />
        </div>
    );
};

export default HomePage;
