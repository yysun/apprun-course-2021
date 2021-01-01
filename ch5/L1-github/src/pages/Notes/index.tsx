import { app, Component } from 'apprun';
import api from './NotesApi';
import GistApi from '../Gist/GistApi';

const gist_link = id => `https://gist.github.com/${id}`;

const Card = ({ article, notes }) => <div class="col-12 col-lg-4 col-md-6 col-sm-12 mb-2">
  <div class="card h-100 w-100 d-inline-block d-flex flex-column">
    {article.cover_image && <img class="card-img-top" src={article.cover_image} alt="" />}
    <div class="card-body">
      <a href={`#Article${article.path}`}>
        <h5 class="card-title">{article.title}</h5>
      </a>
      <div style="cursor: pointer" $onclick={['/display-note', article, notes]}>
        {notes.map(note => <p>{note}</p>)}
      </div>
    </div>
    <div class="mt-auto m-3 text-right">
      {article.gist_id
        ? <a href={gist_link(article.gist_id)} target="_blank" class="card-link"><i class="fa fa-github" /></a>
        : <a href='#' $onclick={['add-gist', article, notes]} class="card-link"><i class="fa fa-plus"/> Gist</a>
      }
      <a href={`#Article${article.path}`} target="_blank" class="card-link">Read...</a>
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
    '/edit-note': (state, { article, notes }) => {
      state.forEach((note) => {
        if(note.article.id === article.id) { note.notes = notes; }
      });
      return state;
    },
    'add-gist': async (state, article, notes, e) => {
      e.preventDefault();
      try {
        const my_notes = notes.join('\n');
        const content = `[${article.title}](https://dev.to/${article.path})\n\n${my_notes}`;
        let gist = {
          description: 'RE ' + article.title,
          'files': {
            'index.md': {
              'filename': 'README.md',
              language: 'Markdown',
              type: 'text/markdown',
              content
            }
          },
          'public': false
        };
        gist = await GistApi.newGist(gist);
        article.gist_id = gist['id'];
        api.save(article.id, { article, notes });
        app.run('@show-modal', {
          title: 'Created a gist',
          body: <a href="${gist_link(article.gist_id)}" target="_blank">
            {gist_link(article.gist_id)}
          </a> });
        return state;
      } catch (ex) {
        app.run('@show-modal', { title: 'Unable to create gist', body: ex });
      }
    }
  };
}
