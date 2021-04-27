import React from 'react';

export const SearchBox = ({handleUserSearch}) => (
            <input className="search"
                   type="search"
                   placeholder="Search News"
                   onChange={handleUserSearch} />
)