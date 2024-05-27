import React from 'react';
import { Link } from 'react-router-dom';

function Help() {
  return (
    <div className="container">
      <h1>Help Center</h1>
      <p>
        Welcome to our Help Center! Here you can find answers to frequently
        asked questions and learn more about using our platform.
      </p>
      <h2>Getting Started</h2>
      <ul>
        <li>
          <Link to="/">How do I find a place to stay?</Link>
        </li>
        <li>
          <Link to="/">How do I create an account?</Link>
        </li>
        <li>
          <Link to="/">What are the payment methods?</Link>
        </li>
      </ul>
      <h2>For Hosts</h2>
      <ul>
        <li>
          <Link to="/">How do I create a listing?</Link>
        </li>
        <li>
          <Link to="/">How do I manage guest bookings?</Link>
        </li>
        <li>
          <Link to="/">What are my hosting responsibilities?</Link>
        </li>
      </ul>
      {/* Add more sections and links as needed */}
    </div>
  );
}

export default Help;
