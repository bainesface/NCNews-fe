import React from 'react';

const DropdownSort = props => {
  const { sortValue, changeSortValue } = props;

  const handleChange = event => {
    const { value } = event.target;
    changeSortValue(value);
  };

  return (
    <div className="dropdown">
      <label className="dropdownLabel">Sort Articles || </label>
      <select
        className="dropdownSelect"
        onChange={handleChange}
        value={sortValue}
      >
        <option value="created_at">Newest</option>
        <option value="comment_count">Comment Count</option>
        <option value="votes">Votes</option>
      </select>
    </div>
  );
};

export default DropdownSort;
