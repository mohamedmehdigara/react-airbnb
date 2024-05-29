import React, { useState, useEffect } from 'react';
import ReviewForm from './ReviewForm'; // Import ReviewForm component
import ReviewList from './ReviewList'; // Import ReviewList component

function Reviews() {
  const [reviews, setReviews] = useState([]);
  const [currentUser, setCurrentUser] = useState(null); // Store current user information

  // Fetch reviews and potentially user data from backend
  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const response = await fetch('/api/reviews'); // Adjust API endpoint
        if (!response.ok) {
          throw new Error('Failed to fetch reviews');
        }
        const data = await response.json();
        setReviews(data);
      } catch (error) {
        console.error('Error fetching reviews:', error);
        // Handle error gracefully (e.g., display an error message)
      }
    };

    // Replace with your logic to fetch and store current user information
    const fetchCurrentUser = async () => {
      try {
        const response = await fetch('/api/users/me'); // Adjust API endpoint
        if (!response.ok) {
          throw new Error('Failed to fetch current user');
        }
        const data = await response.json();
        setCurrentUser(data);
      } catch (error) {
        console.error('Error fetching current user:', error);
        // Handle error gracefully (e.g., display an error message)
      }
    };

    fetchReviews();
    fetchCurrentUser(); // Fetch user data if needed
  }, []);

  return (
    <div className="reviews-container">
      <h1>Reviews</h1>
      {currentUser && currentUser.role === 'guest' && ( // Check user role
        <ReviewForm /> // Render ReviewForm for guests
      )}
      <ReviewList reviews={reviews} />
    </div>
  );
}

export default Reviews;
