import React from 'react';

const DropdownOrder = (props) => {
  const { orderValue, changeOrderValue } = props;

  const handleChange = (event) => {
    const { value } = event.target;
    changeOrderValue(value);
  };

  return (
    <div className="dropdown">
      <label className="dropdownLabel">Order</label>
      <select
        className="dropdownSelect"
        onChange={handleChange}
        value={orderValue}
      >
        <option value="desc">Descending</option>
        <option value="asc">Ascending</option>
      </select>
    </div>
  );
};

export default DropdownOrder;
