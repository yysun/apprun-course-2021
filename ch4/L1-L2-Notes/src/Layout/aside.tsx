import app from 'apprun';

export default () => <aside class="aside-menu">
  <div class="container-fluid" id="aside"></div>
</aside>;

app.on('show-aside', (on = true) => {
  if (on) {
    document.body.classList.remove('aside-menu-hidden');
    document.body.classList.add('aside-menu-show');
  } else {
    document.body.classList.add('aside-menu-hidden');
    document.body.classList.remove('aside-menu-show');
  }
});