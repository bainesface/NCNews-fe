import axios from 'axios';

export const getArticles = () => {
  const baseURL = 'https://bainesface-app.herokuapp.com/api';
  return axios
    .get(`${baseURL}/articles`)
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
