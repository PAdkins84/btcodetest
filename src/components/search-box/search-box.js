import React from 'react';

export const SearchBox = ({handleChange}) => (
            <input className="search"
                   type="search"
                   placeholder="Search News"
                   onChange={handleChange} />
)