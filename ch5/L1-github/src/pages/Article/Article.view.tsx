import app from 'apprun';

const search = (state, e) => ({ ...state, filter: e.target.value });

const ArticleList =  ({ articles, filter }) => <ul>
  {articles && articles
    .filter(a => !filter || a.title.toLowerCase().indexOf(filter.toLowerCase())>=0)
    .map(a => <li><a href={`#Article${a.path}`}>{a.title}</a></li>)}
</ul>;

const ArticleDetail = ({ article }) => <>
  <style>{'.js-actions-panel {display: none!important;}'}</style>
  <h1>{article.title}</h1>
  {article.cover_image && <img src={article.cover_image} />}
  <div><i>{article.description}</i></div>
  <hr />
  <div>{`_html:${article.body_html || ''}`}</div>
</>;

export default state => <div class="row">
  <style>{'img, iframe, video {width:100%}'}</style>
  <div class="col-md-8 col-sm-12"><ArticleDetail {...state} /></div>
  <div class="col-md-4 col-sm-12">
    <h5 class="text-right">DEV Articles</h5>
    <div class="text-right my-2">
      <input placeholder="search ..." $bind="filter"/>
    </div>
    <ArticleList {...state} />
  </div>
</div>;