import React from 'react';
import './general.css';

function Input({ label, type, className, value, setValue, icon, inputAttributes = {} }) {
    // Handle input change event
    const handleInput = (e) => {
        setValue(e.target.value);
    };

    return (
        <div className={`input-container ${className}`}>
            {label && <label className="input-label">{label}</label>}
            <div className="input-wrapper">
                {icon && <span className="input-icon">{icon}</span>}
                <input
                    type={type}
                    value={value}
                    onChange={handleInput}
                    {...inputAttributes}
                    className="input-field"
                />
            </div>
        </div>
    );
}

export default Input;
