import app from 'apprun';

const ArticleList =  ({ articles }) => <ul>
  {articles && articles.map(a =>
    <li><a href={`#Article/${a.id}`}>{a.title}</a></li>)}
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
  <style>{'img {width:100%}'}</style>
  <div class="col-md-8 col-sm-12"><ArticleDetail {...state} /></div>
  <div class="col-md-4 col-sm-12">
    <h3>DEV Articles</h3>
    <ArticleList {...state} />
  </div>
</div>;