const baseUrl = 'https://dev.to/api';

const get = async (url) => {
  const response = await fetch(`${baseUrl}${url}`);
  const results = await response.json();
  return results;
};

export default {

  articles: () => get('/articles?per_page=100'),
  article: id => get(`/articles/${id}`),

};