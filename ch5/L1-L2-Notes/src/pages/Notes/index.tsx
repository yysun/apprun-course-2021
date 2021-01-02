import { app, Component } from 'apprun';
import api from './NotesApi';

const Card = ({ article, notes }) => <div class="col-12 col-lg-4 col-md-6 col-sm-12 mb-2">
  <div class="card h-100 w-100 d-inline-block">
    {article.cover_image && <img class="card-img-top" src={article.cover_image} alt="" />}
    <div class="card-body">
      <h5 class="card-title text-muted">{article.title}</h5>
      {notes.map(note => <p>{ note }</p>)}
      <div class="text-right"><a href={`#Article${article.path}`} class="card-link">Read...</a></div>
    </div>
  </div>
</div>;

export default class NotesComponent extends Component {
  state = [];

  view = state => <div class="row">
    {state.map(note => <Card {...note}/>)}
  </div>;

  update = {
    '#Notes': () => api.notes(),
  };
}
