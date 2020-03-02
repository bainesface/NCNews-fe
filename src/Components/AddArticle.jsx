import React, { Component } from 'react';
import * as api from '../api';
import { UsernameContext } from '../Contexts/Username';

class AddArticle extends Component {
  static contextType = UsernameContext;

  state = {
    title: '',
    body: '',
    topic: 'football'
  };

  render() {
    const { user } = this.context;

    return (
      <div className="addArticleform">
        {user ? (
          <form className="articleForm" onSubmit={this.handleSubmit}>
            <label className="articleLabel">
              Add a new article{' '}
              <input
                className="articleTitleInput"
                required
                type="text"
                name="title"
                placeholder="title here ..."
                value={this.state.title}
                onChange={this.handleTyping}
              />
              <select
                className="dropdownTopics"
                onChange={this.handleChange}
                value={this.state.topic}
              >
                <option value="football">football</option>
                <option value="coding">coding</option>
                <option value="cooking">cooking</option>
              </select>
              <input
                className="articleInputBody"
                required
                type="text"
                name="body"
                placeholder="article text here"
                value={this.state.body}
                onChange={this.handleTyping}
              />
            </label>
            <button className="button">Submit</button>
          </form>
        ) : (
          <p> Log in to add an article</p>
        )}
      </div>
    );
  }

  handleTyping = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleChange = event => {
    const { value } = event.target;
    this.setState({ topic: value });
  };

  handleSubmit = event => {
    const { showArticle } = this.props;
    const { title, body, topic } = this.state;
    const { user } = this.context;

    const articleToPost = {
      username: user,
      title: title,
      topic: topic,
      body: body
    };
    event.preventDefault();

    api.postArticle(articleToPost).then(({ data }) => {
      console.log(data.article);
      showArticle(data.article);
    });
    this.setState({ title: '', topic: 'football', body: '' });
  };
}

export default AddArticle;
