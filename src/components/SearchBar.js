import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function SearchBar() {
  const [searchInput, setSearchInput] = useState('');
  const navigate = useNavigate();

  const handleInputChange = (event) => {
    setSearchInput(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Redirect to search results page with search query
    navigate.push(`/search?query=${searchInput}`);
    setSearchInput('');
  };

  return (
    <form className="search-bar" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Where are you going?"
        value={searchInput}
        onChange={handleInputChange}
      />
      <button type="submit">Search</button>
    </form>
  );
}

export default SearchBar;
