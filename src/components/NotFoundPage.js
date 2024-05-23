import React from 'react';

function NotFoundPage() {
  return (
    <div className="not-found">
      <h1>Oops! Page not found.</h1>
      <p>
        The page you requested may have been moved or deleted. Here are some options:
      </p>
      <ul>
        <li><a href="/">Go back to the homepage</a></li>
        <li><a href="/search">Try searching for something else</a></li>
      </ul>
    </div>
  );
}

export default NotFoundPage;
