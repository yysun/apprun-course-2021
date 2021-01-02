import { Component } from 'apprun';
import _view from './Article.view';
import Api from './api';

export default class ArticleComponent extends Component {

  state = { articles: [], article: null };

  view = _view;

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
