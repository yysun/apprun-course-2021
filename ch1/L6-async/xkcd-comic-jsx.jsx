const refresh = async () => {
  const response = await fetch('https://xkcd-imgs.herokuapp.com/');
  const comic = await response.json();
  return comic;
};

class xkcd extends Component {

  state = refresh;

  view = comic => <>
    <button $onclick="refresh">Refresh</button>
    <div>{comic.title}</div>
    <img src={comic.url} />
  </>;

  update = {
    refresh
  }

}

new xkcd().start(document.body);