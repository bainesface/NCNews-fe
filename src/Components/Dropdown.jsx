import React from 'react';

const Dropdown = props => {
  const { sortValue, changeSortValue } = props;

  const handleChange = event => {
    const { value } = event.target;
    changeSortValue(value);
  };

  return (
    <div className="dropdown">
      <label className="sortArticles">Sort Articles By</label>
      <select onChange={handleChange} value={sortValue}>
        <option value="created_at">Date Created</option>
        <option value="comment_count">Comment Count</option>
        <option value="votes">Votes</option>
      </select>
    </div>
  );
};

export default Dropdown;
