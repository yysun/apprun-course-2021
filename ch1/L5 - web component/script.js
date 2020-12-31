class Clock extends Component {

  state = () => {
    setInterval(() => this.run('tick'), 1000);
    return new Date();
  }
  view = state => `<h1>${state.toLocaleTimeString()}</h1>`;
  update = {
    'tick': state => new Date()
  };

}

app.webComponent('my-clock', Clock);


class ChatBot extends Component {

  view = ({ name, message }) => {
    console.log(`${name}: ${message || ' is ready'}`);
  }

  update = {
    '@question': (state, message) => {
      if (message === 'anyone there?') return { ...state, message: 'yes, I am' };
      if (message === 'who are you?') return { ...state, message: `I am ${state.name}` };
      if (message === state.name) return { ...state, message: 'what\'s up?' };
    }
  }

}

app.webComponent('chat-bot', ChatBot);
