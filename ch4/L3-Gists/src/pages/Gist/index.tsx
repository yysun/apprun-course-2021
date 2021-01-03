import { app, Component } from 'apprun';
import api from './GistApi';
import NotesApi from '../Notes/NotesApi';

const PAGE_SIZE = 10;

const deleteGist = (id) => {
  const notes = NotesApi.notes();
  notes.forEach((note) => {
    if (note.article.gist_id === id) {
      delete note.article.gist_id;
      NotesApi.save(note.article.id, note);
    }
  });
};

const Gist = ({ id, html_url, description, files, owner, is_public }) => <tr>
  <td>
    <a href={html_url} target="_blank">{description || '()'}</a>
  </td>
  <td>
    { Object.keys(files).join(',') }
  </td>
  <td>
    { owner.login }
  </td>
  <td>
    {is_public ? '' : <i class=" fa fa-lock" />}
  </td>
  <td>
    <a href="#" $onclick={ ['confirm-delete', id]}><i class="fa fa-trash"/></a>
  </td>
</tr>;

export default class GistComponent extends Component {

  state = {
    user: null,
    gists: [],
    page: 1,
    count: 0
  };

  view = ({ user, gists, page, count }) => {
    const pages = new Array(Math.ceil(count / PAGE_SIZE)).fill(0);
    const len = pages.length;
    return <div>
      <div class="media">
        <img class="mr-3" src={user.avatar_url} style="width:64px" />
        <div class="media-body">
          <h5 class="mt-0">{user.login} ({user.name})</h5>
          bio: {user.bio}
        </div>
      </div>
      <nav aria-label="Page navigation example">
        <ul class="pagination justify-content-end">
          <li class={`page-item ${!len || page === 1 ? 'disabled' : ''}`}>
            <a class="page-link" href="#" $onclick={['page', 1]} tabindex="-1">Previous</a>
          </li>
          {pages.map((_, idx) =>
            <li class={`page-item ${idx === page - 1 ? 'active' : ''}`}>
              <a class="page-link" href="#" $onclick={['page', idx + 1]}>{idx + 1}</a>
            </li>
          )}
          <li class={`page-item ${!len || page === pages.length ? 'disabled' : ''}`}>
            <a class="page-link" href="#" $onclick={['page', len]}>Next</a>
          </li>
        </ul>
      </nav>
      <table class="table">
        <thead>
          <tr>
            <th scope="col">Description</th>
            <th scope="col">Files</th>
            <th scope="col">Owner</th>
            <th scope="col">Public</th>
            <th scope="col"></th>
          </tr>
        </thead>
        <tbody>
          {gists
            .map(gist => ({ ...gist, is_public: gist.public }))
            .map(gist => <Gist {...gist} />)}
        </tbody>
      </table>
    </div>;
  };

  update = {
    '#Gist': async (state) => {
      try {
        const user = await api.current_user();
        const count = await api.count();
        return {
          user,
          gists: user ? await api.getGists(user.login, state.page, PAGE_SIZE) : [],
          page: state.page,
          count
        };
      } catch (ex) {
        ex===401 && app.run('#401');
      }
    },
    'page': async (state, page, e) => {
      e.preventDefault();
      const gists = await api.getGists(state.user.login, page, PAGE_SIZE) || [];
      return { ...state, page, gists };
    },
    'confirm-delete': (state, id, e) => {
      e.preventDefault();
      app.run('@show-modal', {
        title: 'Confirm',
        body: <>
          <div>Are you sure you want to delete the Gist? </div>
          <div>
            <a href={api.gist_link(id)} target="_blank">{api.gist_link(id)}</a>
          </div>
        </>,
        onOK: ['/del-gist', id]
      });
    },
    '/delete-gist': async (state, id, e) => {
      e.preventDefault();
      try {
        const gists = state.gists.filter(gist => gist.id !== id);
        deleteGist(id);
        await api.deleteGist(id);
        app.run('@show-modal', { title: 'Deleted the gist', body: id });
        return { ...state, gists };
      } catch (ex) {
        app.run('@show-modal', { title: 'Unable to delete gist', body: ex });
      }
    }
  }
}
