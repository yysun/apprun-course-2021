import { app, Component } from 'apprun';
import api from './GistApi';

const Gist = ({ html_url, description, files, owner, is_public }) => <tr>
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
    }
  }
}
