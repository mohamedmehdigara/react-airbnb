import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import axios from 'axios';
import Pagination from './Pagination'; // Assuming Pagination.js is in a 'components' folder

function SearchResultsPage() {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const query = queryParams.get('query') || '';
  const homeType = queryParams.get('homeType') || '';
  const [listings, setListings] = useState([]);
  const [currentPage, setCurrentPage] = useState(1); // Track current page
  const listingsPerPage = 10; // Adjust as needed

  useEffect(() => {
    // Fetch listings from API based on query, homeType, and page
    const fetchListings = async () => {
      try {
        const response = await axios.get(
          `API_ENDPOINT_URL?query=${query}&homeType=${homeType}&page=${currentPage}`
        );
        setListings(response.data);
      } catch (error) {
        console.error('Error fetching listings:', error);
      }
    };

    fetchListings();
  }, [query, homeType, currentPage]);

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  const totalPages = Math.ceil(listings.length / listingsPerPage); // Calculate total pages

  return (
    <div className="container">
      <h1>Search Results</h1>
      <div className="filters-container">
        {/* Your FilterOptions and ResultsFilter components (if needed) */}
      </div>
      {listings.length > 0 ? (
        <>
          {/* Display listings for the current page */}
          {listings
            .slice((currentPage - 1) * listingsPerPage, currentPage * listingsPerPage)
            .map((listing) => (
              <div key={listing.id}>
                <h3>{listing.title}</h3>
                <p>{listing.description}</p>
              </div>
            ))}
          {/* Pagination controls (only if there are multiple pages) */}
          {totalPages > 1 && (
            <Pagination
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={handlePageChange}
            />
          )}
        </>
      ) : (
        <p>No listings found matching your search.</p>
      )}
    </div>
  );
}

export default SearchResultsPage;
