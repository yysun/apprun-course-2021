import { app, Component } from 'apprun';

export default class extends Component {

  // async state
  state = async () => {
    // await ....
    // return ...
  }

  view = state => <></>;

  update = {
    // async event handler
    event: async (state) => {
      // await ...
      // return ...
    }
  }
}

