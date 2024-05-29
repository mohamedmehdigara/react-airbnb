import React, { useState } from 'react';

function ReviewForm({ onSubmit }) {
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState('');

  const handleRatingChange = (event) => {
    setRating(parseInt(event.target.value));
  };

  const handleCommentChange = (event) => {
    setComment(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit({ rating, comment });
    setRating(0); // Reset state after submission
    setComment('');
  };

  return (
    <form className="review-form" onSubmit={handleSubmit}>
      <h2>Leave a Review</h2>
      <label htmlFor="rating">Overall Rating:</label>
      <div className="rating-stars">
        {[1, 2, 3, 4, 5].map((star) => (
          <label key={star}>
            <input
              type="radio"
              name="rating"
              value={star}
              checked={rating === star}
              onChange={handleRatingChange}
            />
            <span className={`star ${star <= rating ? 'active' : ''}`}>&#9733;</span>
          </label>
        ))}
      </div>
      <label htmlFor="comment">Detailed Feedback:</label>
      <textarea
        id="comment"
        name="comment"
        value={comment}
        onChange={handleCommentChange}
        rows="5"
        required
      />
      <button type="submit">Submit Review</button>
    </form>
  );
}

export default ReviewForm;
