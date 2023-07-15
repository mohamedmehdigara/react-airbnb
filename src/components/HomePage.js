import React from 'react';
import HeroBanner from './HeroBanner';
import SearchBar from './SearchBar';

function HomePage() {
  return (
    <div className="homepage">
      <HeroBanner />
      <SearchBar />
    </div>
  );
}

export default HomePage;
