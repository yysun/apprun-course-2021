import { app, Component } from 'apprun';
import ArticleList from './ArticleList';
import ArticleDetail from './ArticleDetail';

export default class ArticleComponent extends Component {

  state = { articles: [], article: {} };
  view = state => <div class="row">
    <div class="col-md-8 col-sm-12"><ArticleDetail {...state} /></div>
    <div class="col-md-4 col-sm-12">
      <ArticleList {...state} />
    </div>
  </div>;

  update = {
    '#Article': state=>  state
  };
}
