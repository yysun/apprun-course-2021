import { app, Component } from 'apprun';

export default class Page404Component extends Component {
  state = 'Contact';

  view = state => <div>
    <h1>Page not found: {state}</h1>
  </div>;

  update = {
    '///': (_, path) => path,
  };
}