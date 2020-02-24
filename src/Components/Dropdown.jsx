import React, { Component } from 'react';

class Dropdown extends Component {
  state = {
    sortByValue: ''
  };
  render() {
    return (
      <div className="dropdown">
        <label className="sortArticles">Sort Articles By</label>
        <select onChange={this.handleChange} value={this.state.sortByValue}>
          <option value="">-</option>
          <option value="created_at">Date Created</option>
          <option value="comment_count">Comment Count</option>
          <option value="votes">Votes</option>
        </select>
      </div>
    );
  }

  handleChange = event => {
    const { value } = event.target;
    this.setState({ sortByValue: value });
    this.props.changeSortValue(value);
  };
}

export default Dropdown;
