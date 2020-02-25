import axios from 'axios';

export const getArticles = value => {
  const baseURL = 'https://bainesface-app.herokuapp.com/api';
  return axios
    .get(baseURL + '/articles', { params: value })
    .then(({ data }) => {
      return data.articles;
    })
    .catch(console.log);
};

export const getArticle = value => {
  const baseURL = 'https://bainesface-app.herokuapp.com/api';

  return axios
    .get(`${baseURL}/articles/${value}`)
    .then(({ data }) => {
      return data.article;
    })
    .catch(console.log);
};

export const getComments = value => {
  const baseURL = 'https://bainesface-app.herokuapp.com/api';

  return axios
    .get(`${baseURL}/articles/${value}/comments`)
    .then(({ data }) => {
      return data.comments;
    })
    .catch(console.log);
};

export const postComment = (commentToPost, article_id) => {
  const baseURL = 'https://bainesface-app.herokuapp.com/api';
  return axios
    .post(`${baseURL}/articles/${article_id}/comments`, commentToPost)
    .catch(err => {
      console.dir(err);
    });
};

export const deleteComment = comment_id => {
  const baseURL = 'https://bainesface-app.herokuapp.com/api';

  return axios.delete(`${baseURL}/comments/${comment_id}`);
};

export const addArticleVote = (votes, article_id) => {
  const baseURL = 'https://bainesface-app.herokuapp.com/api';
  const patchInput = { inc_votes: votes };
  return axios.patch(`${baseURL}/articles/${article_id}`, patchInput);
};

export const addCommentVote = (votes, comment_id) => {
  const baseURL = 'https://bainesface-app.herokuapp.com/api';
  const patchInput = { inc_votes: votes };
  return axios.patch(`${baseURL}/comments/${comment_id}`, patchInput);
};
