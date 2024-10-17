// src/components/movies/Filter.js

import React from 'react';
import './movies.css';
import SearchBar from '../general/SearchBar'; // Adjust the path as necessary
import Tag from './Tag'; // Adjust the path as necessary

const Filter = ({
    minYear,
    setMinYear,
    maxYear,
    setMaxYear,
    sort,
    setSort,
    genres,
    setGenres,
    title,
    setTitle,
}) => {
    // List of available genres
    const availableGenres = [
        'action',
        'drama',
        'comedy',
        'biography',
        'romance',
        'thriller',
        'war',
        'history',
        'sport',
        'sci-fi',
        'documentary',
        'crime',
        'fantasy',
    ];

    return (
        <div className="filter">
            {/* Search Bar for Title */}
            <SearchBar title={title} setTitle={setTitle} />

            {/* Inputs for Minimum and Maximum Year */}
            <div className="year-filters">
                <input
                    type="number"
                    placeholder="Min Year"
                    value={minYear}
                    onChange={(e) => setMinYear(e.target.value)}
                />
                <input
                    type="number"
                    placeholder="Max Year"
                    value={maxYear}
                    onChange={(e) => setMaxYear(e.target.value)}
                />
            </div>

            {/* Select Input for Sorting Options */}
            <select value={sort} onChange={(e) => setSort(e.target.value)}>
                <option value="latest">Latest</option>
                <option value="oldest">Oldest</option>
                <option value="highestrated">Highest Rated</option>
                <option value="lowestrated">Lowest Rated</option>
            </select>

            {/* List of Genre Tags */}
            <ul className="genre-tags">
                {availableGenres.map((genre) => (
                    <Tag
                        key={genre}
                        genre={genre}
                        filter={true} // Assuming filter indicates this tag is used in a filter context
                        genres={genres}
                        setGenres={setGenres}
                    />
                ))}
            </ul>
        </div>
    );
};

export default Filter;
