const get_token = () => {
  const value = `; ${document.cookie}`;
  const parts = value.split('; _token=');
  if (parts.length === 2) {return parts.pop().split(';').shift();}
};

const fetch_github = async (url, payload?) => {
  const response = await fetch(url, { ...payload,
    headers: {
      'Accept': 'application/vnd.github.v3+json',
      'Authorization': `Bearer ${get_token()}`
    },
  });
  if (!response.ok) { throw (response.status); }
  const results = await response.json();
  return results;
};

export default {

  authenticated: () => {
    return !!get_token();
  },

  current_user: () => fetch_github('https://api.github.com/user'),

  getGists: async userId => fetch_github(`https://api.github.com/users/${userId}/gists`),

  newGist: gist => fetch_github('https://api.github.com/gists', {
    method: 'POST',
    body: JSON.stringify(gist)
  }),

  getGist: id => fetch_github(`https://api.github.com/gists${id}`),

  updateGist: (id, gist) => fetch_github(`https://api.github.com/gists${id}`, {
    method: 'PATCH',
    body: JSON.stringify(gist)
  }),

  deleteGist: id => fetch_github(`https://api.github.com/gists${id}`, {
    method: 'DELETE'
  }),

};