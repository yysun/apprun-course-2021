import { app, Component } from 'apprun';
import api from './NotesApi';

export default class NotesAsideComponent extends Component {

  state = { article: {}, notes: [] };

  view = ({ article, notes }) => article
    ?
    <div class="row">
      <div class="list-group list-group-accent w-100">
        <div class="list-group-item list-group-item-accent-dark bg-light text-center text-muted c-small">{article.title}</div>
        {notes.map((note, idx) => <div class="list-group-item list-group-item-accent-secondary c-small"
          contenteditable="plaintext-only" $oninput={['edit', idx]} >
          { note }
        </div>)}
        <div class="list-group-item text-right">
          {notes.length > 0 && <button type="button" class="btn btn-sm" $onclick={['confirm-delete', article]}>
            <i class="fa fa-trash"></i>
          </button>}
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
        // app.run('show-aside');
        state.article = article;
        const { notes } = api.note(state.article.id) || {};
        state.notes = notes ?? [];
        return state;
      }
    },
    '/display-note': (state, article, notes) => {
      if (article) {
        app.run('show-aside');
        return { article, notes };
      }
    },
    add: (state) => {
      state.notes.push('');
      app.run('/add-note', state);
      return state;
    },
    edit: (state, idx, e) => {
      const text = e.target.textContent;
      if (text) {
        state.notes[idx] = text;
      } else {
        state.notes.splice(idx);
      }
      const { path, title, cover_image } = state.article;
      api.save(state.article.id, {
        article: { id: state.article.id, path, title, cover_image },
        notes: state.notes
      });
      app.run('/edit-note', state);
      return state;
    },
    'confirm-delete': (state) => {
      app.run('@show-modal', {
        title: 'Confirm',
        body: `Are you sure you want to delete ${state.notes.length} note(s)?`,
        onOK: ['/del-note', state.article.id]
      });
    },
    '/del-note': (state, id) => {
      api.del(id);
      state.notes = [];
      return state;
    }
  };
}
