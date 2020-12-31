import { app, Component } from 'apprun';

export default class ContactComponent extends Component {
  state = 'Contact';

  view = state => <div>
    <h1 $_color="green" $_font_style="italic" $animation="bounceInRight">{state}</h1>
  </div>;

  update = {
    '#Contact': state => state,
  };
}
