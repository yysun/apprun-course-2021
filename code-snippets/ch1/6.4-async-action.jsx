const comic = async () => {
  const response = await fetch('https://xkcd-imgs.herokuapp.com/');
  const comic = await response.json();
  return comic;
};

class xkcd extends Component {

  state = comic;

  view = comic => <>
    <button $onclick={comic}>Refresh</button>
    <div>{comic.title}</div>
    <img src={comic.url} />
  </>;
}

new xkcd().start(document.body);
