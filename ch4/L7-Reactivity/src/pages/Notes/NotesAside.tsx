import { app, Component } from 'apprun';
import api from './NotesApi';

export default class NotesAsideComponent extends Component {
  state = {};

  view = ({ article, notes }) => article
    ?
    <div class="row">

      <div class="list-group list-group-accent">
        <div class="list-group-item list-group-item-accent-dark bg-light text-center text-muted c-small">{article.title}</div>
        {notes.map((note, idx) => <div class="list-group-item list-group-item-accent-secondary c-small"
          contenteditable="plaintext-only" $oninput={['edit', idx]} >
          { note }
        </div>)}
        <div class="list-group-item text-right">
          <button type="button" class="btn btn-sm" $onclick="add">
            <i class="fa fa-plus"></i> Add ...
          </button>
        </div>
      </div>
    </div>
    :
    <div></div>;

  update = {
    '/display-article': (state, article) => {
      if (article) {
        app.run('show-aside');
        state.article = article;
        const { notes } = api.note(state.article.id) || {};
        state.notes = notes ?? [];
        return state;
      }
    },
    add: (state) => {
      state.notes.push('');
      return state;
    },
    edit: (state, idx, e) => {
      const text = e.target.textContent;
      state.notes[idx] = text;
      const { path, title, cover_image } = state.article;
      api.save(state.article.id, {
        article: { id: state.article.id, path, title, cover_image },
        notes: state.notes
      });
      return state;
    }
  };
}
