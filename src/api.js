import axios from 'axios';

export const getArticles = (value, topic) => {
  const baseURL = 'https://bainesface-app.herokuapp.com/api';

  return axios
    .get(baseURL + '/articles', { params: { sort_by: value, topic: topic } })
    .then(({ data }) => {
      return data.articles;
    });
};

export const getArticle = value => {
  const baseURL = 'https://bainesface-app.herokuapp.com/api';

  return axios.get(`${baseURL}/articles/${value}`).then(({ data }) => {
    return data.article;
  });
};

export const getComments = value => {
  const baseURL = 'https://bainesface-app.herokuapp.com/api';

  return axios.get(`${baseURL}/articles/${value}/comments`).then(({ data }) => {
    return data.comments;
  });
};

export const postComment = (commentToPost, article_id) => {
  const baseURL = 'https://bainesface-app.herokuapp.com/api';
  return axios.post(
    `${baseURL}/articles/${article_id}/comments`,
    commentToPost
  );
};

export const deleteComment = comment_id => {
  const baseURL = 'https://bainesface-app.herokuapp.com/api';

  return axios.delete(`${baseURL}/comments/${comment_id}`);
};

export const getUser = username => {
  const baseURL = 'https://bainesface-app.herokuapp.com/api';
  return axios.get(`${baseURL}/users/${username}`).then(({ data }) => {
    return data.user;
  });
};

export const updateVote = (votes, comment_id, article_id) => {
  const baseURL = 'https://bainesface-app.herokuapp.com/api';
  const patchInput = { inc_votes: votes };

  if (comment_id) {
    return axios.patch(`${baseURL}/comments/${comment_id}`, patchInput);
  } else if (article_id) {
    return axios.patch(`${baseURL}/articles/${article_id}`, patchInput);
  }
};
