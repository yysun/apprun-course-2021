class xkcd extends Component {

  // Initialize state
  state = async () => {
    const response = await fetch('https://xkcd-imgs.herokuapp.com/');
    const comic = await response.json();
    return comic ;
  };

  view = comic => <>
    { comic && <img src={comic.url} /> }
  </>;
}

app.webComponent('xkcd-comic', xkcd);


