class Clock extends Component {

  state = () => {
    setInterval(() => this.run('tick'), 1000);
    return new Date();
  }
  view = state => `<h1>${state.toLocaleTimeString()}</h1>`;
  update = {
    'tick': () => new Date()
  };

}

app.webComponent('my-clock', Clock);