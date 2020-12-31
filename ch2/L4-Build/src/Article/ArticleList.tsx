import app from 'apprun';

export default ({ articles }) => <ul>
  {articles && articles.map(a =>
    <li><a href={`#Article/${a.id}`}>{a.title}</a></li>)}
</ul>;

