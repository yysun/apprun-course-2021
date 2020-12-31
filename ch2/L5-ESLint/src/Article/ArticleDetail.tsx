import app from 'apprun';

export default ({ article }) => <>
  <style>{'.js-actions-panel {display: none!important;}'}</style>
  <h1>{article.title}</h1>
  {article.cover_image && <img src={article.cover_image} />}
  <div><i>{article.description}</i></div>
  <hr />
  <div>{`_html:${article.body_html || ''}`}</div>
</>;
