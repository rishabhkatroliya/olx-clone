import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { fetchClassifiedAds } from '../Redux/action';

const FilterBar = () => {
  const dispatch = useDispatch();
  const [filters, setFilters] = useState({ category: '', sortBy: '', search: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFilters((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleFilterSubmit = (e) => {
    e.preventDefault();
    dispatch(fetchClassifiedAds(filters));
  };

  return (
    <div className="filters-bar">
      <form onSubmit={handleFilterSubmit}>
        <select name="category" value={filters.category} onChange={handleChange}>
          <option value="">All Categories</option>
          <option value="Clothing">Clothing</option>
          <option value="Electronics">Electronics</option>
          <option value="Furniture">Furniture</option>
          <option value="Other">Other</option>
        </select>
        <select name="sortBy" value={filters.sortBy} onChange={handleChange}>
          <option value="">Sort By</option>
          <option value="dateNew">Date (Newest First)</option>
          <option value="dateOld">Date (Oldest First)</option>
        </select>
        <input type="text" name="search" placeholder="Search by name" value={filters.search} onChange={handleChange} />
        <button type="submit">Apply Filters</button>
      </form>
    </div>
  );
};

export default FilterBar;
