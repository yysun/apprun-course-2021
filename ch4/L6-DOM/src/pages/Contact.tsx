import { app, Component } from 'apprun';

const focus = e => e.focus();
const Shadow = (_, children) => {
  const el = document.createElement('section');
  el.attachShadow({ mode: 'open' });
  app.render(el.shadowRoot as any, children);
  return <>{el}</>;
};

export default class ContactComponent extends Component {
  state = 'Contact';

  view = state => <>
    <h1>{state}</h1>
    <div>Set focus using ref</div>
    <input ref={focus}/>
    <hr />
    <div>Outside shadow: black</div>
    <Shadow>
      <style>{'div {color: red}'}</style>
      <div>Inside shadow: red</div>
      <div>Inside shadow: red</div>
    </Shadow>
    <div>Outside shadow: black</div>
  </>;

  update = {
    '#Contact': state => state,
  };
}
