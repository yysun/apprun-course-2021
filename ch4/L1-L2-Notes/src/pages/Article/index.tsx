import { app, Component } from 'apprun';
import _view from './Article.view';
import Api from './api';

export default class ArticleComponent extends Component {

  state = { articles: [], article: null };

  view = _view;

  update = {
    '#Article': async (state, ...path) => {
      const articles = await Api.articles();
      const article = path?.length
        ? await Api.article(path.join('/'))
        : state.article || await Api.article(articles[0].path.substring(1));
      app.run('/display-article', article);
      return { articles, article };
    }
  };
}
