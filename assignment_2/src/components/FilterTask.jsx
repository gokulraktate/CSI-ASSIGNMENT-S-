import React from 'react';

const FilterTask = ({ filter, setFilter, setSortOrder }) => {
  return (
    <div className="flex gap-4 mb-4">
      <select onChange={e => setFilter(e.target.value)} value={filter} className="p-2 rounded border">
        <option value="all">All</option>
        <option value="active">Active</option>
        <option value="completed">Completed</option>
      </select>

      <select onChange={e => setSortOrder(e.target.value)} className="p-2 rounded border">
        <option value="newest">Newest First</option>
        <option value="oldest">Oldest First</option>
      </select>
    </div>
  );
};

export default FilterTask;
