import React from 'react';
import { Link } from 'react-router-dom';

function BecomeHost() {
  return (
    <div className="container">
      <h1>Become a Host</h1>
      <p>
        Welcome to the exciting world of hosting! Share your space with guests
        and earn extra income. Here's how to get started:
      </p>
      <ul>
        <li>Create a listing: Describe your space, amenities, and pricing.</li>
        <li>Set your availability: Block out dates when your space is unavailable.</li>
        <li>Manage guest communication: Answer questions and confirm bookings.</li>
        <li>Welcome guests: Provide a comfortable and memorable stay.</li>
      </ul>
      <p>
        Ready to become a host? Sign up for an account and create your first
        listing!
      </p>
      <Link to="/SignupForm" className="btn btn-primary">Sign Up to Host</Link>
    </div>
  );
}

export default BecomeHost;
