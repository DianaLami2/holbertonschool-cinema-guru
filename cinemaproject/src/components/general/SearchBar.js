import React from 'react';
import './general.css';

function SearchBar({ title, setTitle }) {
    // Handle input change event
    const handleInput = (e) => {
        setTitle(e.target.value);
    };

    return (
        <div className="searchbar-container">
            <input
                type="text"
                value={title}
                onChange={handleInput}
                className="searchbar-input"
                placeholder="Search..."
            />
        </div>
    );
}

export default SearchBar;
