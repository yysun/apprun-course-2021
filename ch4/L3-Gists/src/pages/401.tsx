import { app, Component } from 'apprun';

export default class Page401Component extends Component {

  state = '401';

  view = () => <div>
    <h3>Authorize with Github Required</h3>
    <div>
      <a href="https://github.com/login/oauth/authorize?scope=gist&amp;client_id=fb79b79ccaa5b16086d0">
        Click to open the Github Authorization page
      </a>
    </div>
  </div>;

  update = {
    '#401': state => state,
  };
}
