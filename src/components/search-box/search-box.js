import React from 'react';
import './search-box-styles.scss';

export const SearchBox = ({handleChange}) => (
            <input className="search-box"
                   type="search"
                   placeholder="Search News"
                   onChange={handleChange} />
)