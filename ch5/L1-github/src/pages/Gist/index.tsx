import { app, Component } from 'apprun';
import api from './GistApi';
import NotesApi from '../Notes/NotesApi';

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
    <a href="#" $onclick={ ['delete-gist', id]}><i class="fa fa-trash"/></a>
  </td>
</tr>;

export default class GistComponent extends Component {
  state = 'Gist';

  view = ({ user, gists }) => <div>
    <div class="media">
      <img class="mr-3" src={user.avatar_url} style="width:64px"/>
      <div class="media-body">
        <h5 class="mt-0">{user.login} ({ user.name })</h5>
          bio: {user.bio}
      </div>
    </div>
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

  update = {
    '#Gist': async () => {
      try {
        const user = await api.current_user();
        return {
          user,
          gists: user ? await api.getGists(user.login) : []
        };
      } catch {
        app.run('#401');
      }
    },
    'delete-gist': async (state, id, e) => {
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
