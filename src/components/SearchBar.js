import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function SearchBar() {
  const [searchInput, setSearchInput] = useState('');
  const [homeType, setHomeType] = useState('');
  const navigate = useNavigate();

  const handleInputChange = (event) => {
    setSearchInput(event.target.value);
  };

  const handleHomeTypeChange = (event) => {
    setHomeType(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    navigate(`/search?query=${searchInput}&homeType=${homeType}`);
    setSearchInput('');
    setHomeType('');
  };
   

  return (
    <form className="search-bar" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Where are you going?"
        value={searchInput}
        onChange={handleInputChange}
      />
      <select value={homeType} onChange={handleHomeTypeChange}>
        <option value="">All Home Types</option>
        <option value="apartment">Apartment</option>
        <option value="house">House</option>
        <option value="villa">Villa</option>
        <option value="cabin">Cabin</option>
      </select>
      <button type="submit">Search</button>
    </form>
  );
}

export default SearchBar;
