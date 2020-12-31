// define initial state
const state = 0;

// view is a function to render the state
const view = state => `<div>
  <h1>${state}</h1>
  <button onclick="app.run('-1')">-1</button>
  <button onclick="app.run('+1')">+1</button>
</div>`;

// update is a collection of event handlers to update the state
const update = {
  '+1': state => state + 1,
  '-1': state => state - 1
};

// apprun app is built with the state, view and update
app.start(document.body, state, view, update);