import React, { Component } from 'react';
import { Link } from '@reach/router';

class SearchByUser extends Component {
  state = {
    author: ''
  };

  render() {
    const { author } = this.state;

    return (
      <div className="search">
        <label>Search by author</label>{' '}
        <input
          type="text"
          value={author}
          placeholder="author"
          onChange={this.handleTyping}
        ></input>
        <button className="button" onClick={this.handleClick}>
          <Link className="searchLink" to={`/users/${author}`}>
            Go!
          </Link>
        </button>
      </div>
    );
  }

  handleTyping = event => {
    this.setState({ author: event.target.value });
  };

  handleClick = event => {
    this.setState({ author: '' });
  };
}

export default SearchByUser;
