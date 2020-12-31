import { app, Component } from 'apprun';
import ArticleList from './ArticleList';
import ArticleDetail from './ArticleDetail';
import Api from './api';

export default class ArticleComponent extends Component {

  state = { articles: [], article: null };
  view = state => <div class="row">
    <style>{'img {width:100%}'}</style>
    <div class="col-md-8 col-sm-12"><ArticleDetail {...state} /></div>
    <div class="col-md-4 col-sm-12">
      <h3>DEV Articles</h3>
      <ArticleList {...state} />
    </div>
  </div>;

  update = {
    '#Article': async (state, id) => {
      const articles = await Api.articles();
      const article = id
        ? await Api.article(id)
        : state.article || await Api.article(articles[0].id);
      return { articles, article };
    }
  };
}
