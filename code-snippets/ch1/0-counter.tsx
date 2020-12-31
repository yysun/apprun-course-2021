import { app, Component } from "apprun";

const add = (state, num) => state + num;

class Counter extends Component {
  
  state = 0;

  view = state => <div class="my-counter">
    <button $onclick={[add, -1]}>
    -
    </button>
    <span>{state}</span>
    <button $onclick={[add, +1]}>
    +
    </button>
  </div>;
}

app.webComponent('my-counter', Counter);

