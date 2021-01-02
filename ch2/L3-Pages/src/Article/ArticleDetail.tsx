import { app, Component } from 'apprun';

export default class ArticleDetailComponent extends Component {
  state = 'ArticleDetail';

  view = state => <div>
    <h1>{state}</h1>
  </div>;

  update = {
    '#ArticleDetail': state => state,
  };
}

