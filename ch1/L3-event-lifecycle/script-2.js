// define initial state
const state = {
  counter: 0,
  counter_plus: 0,
  counter_minus: 0
};

// view is a function to render the state
const view = ({ counter, counter_plus, counter_minus }) => `<div>
  <h1>${counter}</h1>
  <button onclick="app.run('-1')">-1 (${counter_minus})</button>
  <button onclick="app.run('+1')">+1 (${counter_plus})</button>
  <button onclick="app.run('log')">Log</button>
  <button onclick="app.run('refresh')">Refresh</button>

</div>`;

// update is a collection of event handlers to update the state
const update = {
  '+1': state => ({
    ...state,
    counter_plus: state.counter_plus + 1,
    counter: state.counter + 1
  }),
  '-1': state => ({
    ...state,
    counter_minus: state.counter_minus + 1,
    counter: state.counter - 1
  }),
  'log': state => console.log(state),
  'refresh': state => state
};

// apprun app is built with the state, view and update
app.start(document.body, state, view, update);

