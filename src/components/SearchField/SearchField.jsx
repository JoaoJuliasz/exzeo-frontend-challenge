import React from 'react';
import './SearchField.scss';

const SearchBar = ({onChange}) => (
    <input type='searc' onChange={onChange} className='search' placeholder='Find your album...'/>
);

export default SearchBar;