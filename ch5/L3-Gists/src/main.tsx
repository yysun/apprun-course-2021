import app from 'apprun';
import Home from './pages/Home';
import Article from './pages/Article';
import Map from './pages/Map';
import Layout from './Layout/index';
import Page404 from './pages/404';
import Page401 from './pages/401';
import Notes from './pages/Notes';
import NotesAside from './pages/Notes/NotesAside';
import Gist from './pages/Gist';
import GistApi from './pages/Gist/GistApi';

const gist = GistApi.authenticated() ? '_html: Gists <i class="fa fa-github"/>': 'Gists';

const config = {
  title  : 'DEV Notes',
  element: 'my-app',
  nav    : [
    { text: 'Home',     'link': '#', active: true },
    { text: 'Articles', 'link': '#Article' },
    { text: 'Notes',    'link': '#Notes' },
    { text: gist,     'link': '#Gist', isNew: true },
  ],
  sidebar: [
    { text: 'Home',     'link': '#', active: true },
    { text: 'Articles', 'link': '#Article' },
    { text: 'Notes',    'link': '#Notes' },
    { text: 'Gists',    'link': '#Gist', isNew: true },
  ],
};

app.render(document.body, <Layout {...config} />);

const element = 'my-app';
const pages = [Home, Map, Notes, Article, Page404, Page401, Gist];
pages.forEach(C => new C().mount(element));
new NotesAside().start('aside');
