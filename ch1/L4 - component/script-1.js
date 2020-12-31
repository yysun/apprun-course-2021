class Clock extends Component {

  state = () => {
    window.setInterval(() => this.run('tick'), 1000);
    return new Date();
  };

  view = state => `<h1>${state.toLocaleTimeString()}</h1>`;

  update = {
    'tick': state => new Date()
  }
}

new Clock().mount('clock1');
new Clock().mount('clock2');
