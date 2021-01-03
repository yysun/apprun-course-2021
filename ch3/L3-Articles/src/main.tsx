import app from 'apprun';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Article from './pages/Article';
import Layout from './Layout/index';

const config = {
  title  : 'DEV Reader',
  element: 'my-app',
  nav    : [
    { text: 'Home',    'link': '#', active: true },
    { text: 'Contact', 'link': '#Contact' },
    { text: 'About',   'link': '#About' },
    { text: 'Articles',  'link': '#Article' }
  ],
  sidebar: [
    { text: 'Home',    'link': '#', icon:'home', active: true },
    { text: 'Contact', 'link': '#Contact' },
    { text: 'About',   'link': '#About' },
    { text: 'Articles',  'link': '#Article', icon: 'book-open', isNew: true }
  ],
};

app.render(document.body, <Layout {...config}/>);

const element = 'my-app';
const pages = [Home, About, Contact, Article];
pages.forEach(C => new C().mount(element));
