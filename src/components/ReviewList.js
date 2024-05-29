import React from 'react';

function ReviewList({ reviews }) {
  return (
    <div className="review-list">
      <h2>Guest Reviews</h2>
      {reviews.length > 0 ? (
        reviews.map((review) => (
          <div className="review-item" key={review.id}>
            <p>
              <b>{review.guestName}</b> (Guest) - {review.rating} stars
            </p>
            <p>{review.comment}</p>
          </div>
        ))
      ) : (
        <p>No reviews yet for this listing.</p>
      )}
    </div>
  );
}

export default ReviewList;
