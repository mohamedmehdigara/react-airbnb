import React, { useState } from 'react';

function Filters() {
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(1000);
  const [amenities, setAmenities] = useState([]); // Selected amenities

  const handlePriceChange = (event) => {
    const value = parseInt(event.target.value);
    if (event.target.name === 'minPrice') {
      setMinPrice(value);
    } else {
      setMaxPrice(value);
    }
  };

  const handleAmenityChange = (event) => {
    const newAmenities = [...amenities];
    if (event.target.checked) {
      newAmenities.push(event.target.value);
    } else {
      const index = newAmenities.indexOf(event.target.value);
      newAmenities.splice(index, 1);
    }
    setAmenities(newAmenities);
  };

  return (
    <div className="filters">
      <h2>Filters</h2>
      <div>
        <label htmlFor="minPrice">Price Range:</label>
        <input
          type="number"
          id="minPrice"
          name="minPrice"
          value={minPrice}
          onChange={handlePriceChange}
        />
        -
        <input
          type="number"
          id="maxPrice"
          name="maxPrice"
          value={maxPrice}
          onChange={handlePriceChange}
        />
      </div>
      <div>
        <h3>Amenities:</h3>
        <ul>
          <li>
            <input
              type="checkbox"
              id="wifi"
              value="wifi"
              onChange={handleAmenityChange}
            />
            <label htmlFor="wifi">Wi-Fi</label>
          </li>
          <li>
            <input
              type="checkbox"
              id="parking"
              value="parking"
              onChange={handleAmenityChange}
            />
            <label htmlFor="parking">Parking</label>
          </li>
          {/* Add more amenities as needed */}
        </ul>
      </div>
    </div>
  );
}

export default Filters;
