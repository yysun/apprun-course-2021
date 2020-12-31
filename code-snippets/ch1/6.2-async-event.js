const refresh = async () => {
  const response = await fetch('https://xkcd-imgs.herokuapp.com/');
  const comic = await response.json();
  return comic;
};

class xkcd extends Component {
  state = refresh;

  view = ({ title, url }) => html`
    <button @click=${() => this.run('refresh')}>Refresh</button>
    <div>${title}</div>
    <img src=${url} />
  `;

  update = {
    refresh
  }
}

new xkcd().start(document.body);

