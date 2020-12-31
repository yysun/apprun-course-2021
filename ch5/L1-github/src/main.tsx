import app from 'apprun';
import Home from './pages/Home';
import Article from './pages/Article';
import Map from './pages/Map';
import Layout from './Layout/index';
import Page404 from './pages/404';
import Notes from './pages/Notes';
import NotesAside from './pages/Notes/NotesAside';

const config = {
  title  : 'DEV Reader',
  element: 'my-app',
  nav    : [
    { text: 'Home',    'link': '#', active: true },
    { text: 'Articles',  'link': '#Article' },
    { text: 'Notes',   'link': '#Notes', isNew: true },
  ],
  sidebar: [
    { text: 'Home',    'link': '#', active: true },
    { text: 'Articles',  'link': '#Article' },
    { text: 'Notes',   'link': '#Notes', isNew: true },
  ],
};

app.render(document.body, <Layout {...config}/>);

const element = 'my-app';
new Home().mount(element);
new Article().mount(element);
new Page404().mount(element);
new Map().mount(element);
new Notes().mount(element);
new NotesAside().start('aside');