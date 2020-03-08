import React, { Component } from 'react';
import * as api from '../api';
import { UsernameContext } from '../Contexts/Username';
import ShowArticle from './ShowArticle';

class AddArticle extends Component {
  static contextType = UsernameContext;

  state = {
    article: null,
    title: '',
    body: '',
    topic: 'football'
  };

  render() {
    const { article } = this.state;
    return (
      <div className="addArticleform">
        <form className="articleForm" onSubmit={this.handleSubmit}>
          <label className="articleLabel"> Add a new article </label>
          <input
            className="articleTitleInput"
            required
            type="text"
            name="title"
            placeholder="title here"
            value={this.state.title}
            onChange={this.handleTyping}
          />
          <select
            className="dropdownTopics"
            onChange={this.handleChange}
            value={this.state.topic}
          >
            Choose topic <option value="football">football</option>
            <option value="coding">coding</option>
            <option value="cooking">cooking</option>
          </select>
          <textarea
            className="articleInputBody"
            required
            type="text"
            name="body"
            placeholder="article text here"
            value={this.state.body}
            onChange={this.handleTyping}
          />
          <button className="addArticleButton">Submit</button>
        </form>
        {article && (
          <>
            <p>Article successfully added</p>
            <ShowArticle article={article} />
          </>
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
      this.setState({
        article: data.article,
        title: '',
        topic: 'football',
        body: ''
      });
    });
  };
}

export default AddArticle;
