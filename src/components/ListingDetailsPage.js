import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

function ListingDetailsPage() {
  const { id } = useParams();
  const [listing, setListing] = useState(null);

  useEffect(() => {
    // Fetch listing details from API
    const fetchListingDetails = async () => {
      try {
        const response = await axios.get(`API_ENDPOINT_URL/${id}`);
        setListing(response.data);
      } catch (error) {
        console.error('Error fetching listing details:', error);
      }
    };

    fetchListingDetails();
  }, [id]);

  if (!listing) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container">
      <h1>Listing Details - {listing.title}</h1>
      {/* Display the listing details */}
      <h3>{listing.title}</h3>
      <p>{listing.description}</p>
    </div>
  );
}

export default ListingDetailsPage;
