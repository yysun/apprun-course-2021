import { app, Component } from 'apprun';

const add = (state, num) => state + num;
const dec = state => state - 1;
const inc = state => state + 1;

const counter_view = state => <>
  <h1>{state}</h1>
  <button class="btn btn-light" $onclick='-1'>-1</button>&nbsp;
  <button class="btn btn-light" $onclick='+1'>+1</button> call event names
  <hr />
  <button class="btn btn-light" $onclick={['add', -1]}>-1</button>&nbsp;
  <button class="btn btn-light" $onclick={['add', +1]}>+1</button> call events with parameters
  <hr />
  <button class="btn btn-light" $onclick={dec}>-1</button>&nbsp;
  <button class="btn btn-light" $onclick={inc}>+1</button> call action functions
  <hr />
  <button class="btn btn-light" $onclick={[add, -1]}>-1</button>&nbsp;
  <button class="btn btn-light" $onclick={[add, +1]}>+1</button> call action functions with parameters
</>;

export default class AboutComponent extends Component {

  state = 0;

  view = counter_view;

  update = {
    '#About': state => state,
    '-1': dec,
    '+1': inc,
    add
  };
}
