import { app, ROUTER_EVENT } from 'apprun';

const router = () => {
  const url = location.hash || '#' + location.pathname.substr(1);
  const [event, ...args] = url.split('/');
  app.run(event, ...args);
  app.run(ROUTER_EVENT, event, ...args);
};

document.addEventListener('DOMContentLoaded', () => {
  window.onpopstate = router;
  router();
});

app.route = router;

app.on('/Article', (path, e) => {
  e.preventDefault();
  history.pushState(null, '', e.target.href);
  app.run('#Article', path);
});