const get_token = () => {
  const value = `; ${document.cookie}`;
  const parts = value.split('; _token=');
  if (parts.length === 2) {return parts.pop().split(';').shift();}
};

const fetch_github = async (url, payload?) => {
  const response = await fetch(url, { ...payload,
    headers: {
      'Accept': 'application/json',
      'Authorization': `Bearer ${get_token()}`
    },
  });
  if (!response.ok) { throw (response.status); }
  if (response.status === 204) { return; }
  const results = await response.json();
  return results;
};

const graphql = async query => fetch_github('https://api.github.com/graphql', {
  method: 'POST',
  body: JSON.stringify({ query })
});

export default {

  authenticated: () => {
    return !!get_token();
  },

  current_user: () => fetch_github('https://api.github.com/user'),

  getGists: async (userId, page=1, size=20) => fetch_github(`https://api.github.com/users/${userId}/gists?per_page=${size}&page=${page}`),

  newGist: gist => fetch_github('https://api.github.com/gists', {
    method: 'POST',
    body: JSON.stringify(gist)
  }),

  getGist: id => fetch_github(`https://api.github.com/gists/${id}`),

  updateGist: (id, gist) => fetch_github(`https://api.github.com/gists/${id}`, {
    method: 'PATCH',
    body: JSON.stringify(gist)
  }),

  deleteGist: id => fetch_github(`https://api.github.com/gists/${id}`, {
    method: 'DELETE'
  }),

  gist_link: id => `https://gist.github.com/${id}`,

  count: async () => {
    const result = await graphql(`query {
  viewer {
    gists(privacy: ALL) {
      totalCount
    }
  }
}`);
    return result.data.viewer.gists.totalCount;
  }

};