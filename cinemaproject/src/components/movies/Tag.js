// src/components/movies/Tag.js

import React, { useState } from 'react';
import './movies.css';

const Tag = ({ genre, filter, genres, setGenres }) => {
    // State to manage whether the tag is selected or not
    const [selected, setSelected] = useState(false);

    // Function to handle tag click
    const handleTag = () => {
        if (selected) {
            // If selected, remove genre from genres array
            setGenres(genres.filter((g) => g !== genre));
            setSelected(false);
        } else {
            // If not selected, add genre to genres array
            setGenres([...genres, genre]);
            setSelected(true);
        }
    };

    return (
        <li
            className={`tag ${selected ? 'selected' : ''}`} // Add 'selected' class if selected
            onClick={handleTag}
        >
            {genre} {/* Display the genre name */}
        </li>
    );
};

export default Tag;
