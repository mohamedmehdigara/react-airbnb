import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import axios from 'axios';
import FilterOptions from './FilterOptions';
import ResultsFilter from './ResultsFilter';

function SearchResultsPage() {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const query = queryParams.get('query') || '';
  const homeType = queryParams.get('homeType') || '';
  const [listings, setListings] = useState([]);

  useEffect(() => {
    // Fetch listings from API based on query and home type
    const fetchListings = async () => {
      try {
        const response = await axios.get(
          `API_ENDPOINT_URL?query=${query}&homeType=${homeType}`
        );
        setListings(response.data);
      } catch (error) {
        console.error('Error fetching listings:', error);
      }
    };

    fetchListings();
  }, [query, homeType]);

  return (
    <div className="container">
      <h1>Search Results</h1>
      <div className="filters-container">
        <FilterOptions />
        <ResultsFilter />
      </div>
      {/* Render the list of listings */}
      {listings.map((listing) => (
        <div key={listing.id}>
          <h3>{listing.title}</h3>
          <p>{listing.description}</p>
        </div>
      ))}
    </div>
  );
}

export default SearchResultsPage;
