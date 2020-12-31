import { app, Component } from 'apprun';

export default class AdminComponent extends Component {
  state = 'Admin'

  view = state => <>
    <div>
      {state}
    </div>
  </>;

  update = {
    '#Admin': () => {
      window.requestAnimationFrame(()=>
        app.run('@show-modal', { title:'Access Denied', body: 'You don\'t have access to this page.' }));
    }
  }
}