import React from 'react';

function FilterOptions() {
  return (
    <div className="filter-options">
      <h4>Filters:</h4>
      {/* Add additional filter options */}
      <div>
        <input type="checkbox" id="filter1" />
        <label htmlFor="filter1">Filter 1</label>
      </div>
      <div>
        <input type="checkbox" id="filter2" />
        <label htmlFor="filter2">Filter 2</label>
      </div>
      <div>
        <input type="checkbox" id="filter3" />
        <label htmlFor="filter3">Filter 3</label>
      </div>
    </div>
  );
}

export default FilterOptions;
