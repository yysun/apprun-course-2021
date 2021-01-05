// define initial state
const state = 0;

// add functions to update the state
const dec = state => state + 1;
const inc = state => state + 1;

// view is a function to render the state
const view = state => `<div>
  <h1>${state}</h1>
  <button onclick="app.run('dec')">-1</button>
  <button onclick="app.run('inc')">+1</button>
</div>`;

// update is a collection of event handlers
const update = { dec, inc };

// apprun app is built with the state, view and update
app.start(document.body, state, view, update);