const fetch = require('node-fetch');
const url = require('url');
const querystring = require('querystring');

const REDIRECT = '<html><head><meta http-equiv="refresh"content=0;url="/#Gist" ></head></html>';

const github_oauth = (req, res, next) => {
  const pathname = url.parse(req.url).pathname;
  const code = querystring.parse(url.parse(req.url).query).code;
  if (code && pathname === '/github/sign_in') {
    fetch('https://github.com/login/oauth/access_token', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({
        'client_id': process.env.client_id,
        'client_secret': process.env.client_secret,
        code,
      })
    })
      .then(result => result.json())
      .then((json) => {
        if (!json || !json.access_token) {
          res.writeHead(302, {
            'Location': '/#401'
          });
          res.end();
        } else {
          res.writeHead(200, {
            'Content-Type': 'text/html',
            'Content-Length': REDIRECT.length,
            'Set-Cookie': '_token=' + json.access_token +';path=/;max-age=' + 6*30*24*60*60*1000,
          });
          res.end(REDIRECT);
        }
      })
      .catch((err) => {
        res.writeHead(500);
        res.end(err);
      });
  } else {
    next();
  }
};

module.exports = {
  middleware: [github_oauth]
};