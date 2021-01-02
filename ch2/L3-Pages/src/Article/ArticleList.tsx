import { app, Component } from 'apprun';

export default class ArticleListComponent extends Component {
  state = 'ArticleList';

  view = state => <div>
    <h1>{state}</h1>
  </div>;

  update = {
    '#ArticleList': state => state,
  };
}

