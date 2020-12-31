// define initial state
const state = 0;

// view is a function to render the state
const view = state => `<h1>${state}</h1>`;

// update is a collection of event handlers
const update = {

};

// apprun app is built with the state, view and update
app.start(document.body, state, view, update);