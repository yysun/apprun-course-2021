const state = 0;

const add = () => {
  state++;

  // 1. setState() => React
  // 2. stateChange() => Blazor
  // 3. Automatically => Angular, Vue, Svelte
}

const view = state => `<div>
  <h1>${state}</h1>
  <button onclick="app.run('-1')">-1</button>
  <button onclick="add()">+1</button>
</div>`;

const update = {
  '+1': state => state + 1,
  '-1': state => state - 1
};
