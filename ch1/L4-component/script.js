const state = () => {
  return new Date();
};

const view = state => `<h1>${state.toLocaleTimeString()}</h1>`;

const update = {
  'tick': () => new Date()
}

app.start(document.body, state, view, update);
window.setInterval(() => app.run('tick'), 1000);


// new Clock().mount('clock1');
// new Clock().mount('clock2');