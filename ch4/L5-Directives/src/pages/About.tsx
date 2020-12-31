import { app, Component } from 'apprun';

const add = (state, num) => state + num;

export default class AboutComponent extends Component {

  state = 0;

  view = state => <>
    <h1>{state}</h1>
    <button class="btn btn-light" $onclick='-1'>-1</button>&nbsp;
    <button class="btn btn-light" $onclick='+1'>+1</button> call event names
    <hr />
    <button class="btn btn-light" $onclick={['add', -1]}>-1</button>&nbsp;
    <button class="btn btn-light" $onclick={['add', +1]}>+1</button> call events with parameters
    <hr />
    <button class="btn btn-light" $onclick={[add, -1]}>-1</button>&nbsp;
    <button class="btn btn-light" $onclick={[add, +1]}>+1</button> call action functions
  </>;

  update = {
    '#About': state => state,
    '-1': state => state - 1,
    '+1': state => state + 1,
    add
  };
}
