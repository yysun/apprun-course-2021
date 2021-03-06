import app from 'apprun';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Article from './pages/Article';
import Map from './pages/Map';
import Layout from './Layout/index';
import Page404 from './pages/404';

const config = {
  title  : 'DEV Reader',
  element: 'my-app',
  nav    : [
    { text: 'Home',    'link': '#', active: true },
    { text: 'Contact', 'link': '#Contact' },
    { text: 'About',   'link': '#About' },
    { text: 'Articles',  'link': '#Article' },
    { text: 'Map',  'link': '#Map' }
  ],
  sidebar: [
    { text: 'Home',    'link': '#', icon:'home', active: true },
    { text: 'Contact', 'link': '#Contact', isNew: true },
    { text: 'About',   'link': '#About' },
    { text: 'Articles', 'link': '#Article', icon: 'book-open' },
    { text: 'Map',  'link': '#Map', icon: 'globe', isNew: true }
  ],
};

app.render(document.body, <Layout {...config}/>);

const element = 'my-app';

const pages = [Home, About, Contact, Article, Page404, Map];
pages.forEach(C => new C().mount(element));
