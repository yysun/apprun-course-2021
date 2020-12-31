import app from 'apprun';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Article from './pages/Article';
import Map from './pages/Map';
import Layout from './Layout/index';

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
    { text: 'Home',    'link': '#', active: true },
    { text: 'Contact', 'link': '#Contact', isNew: true },
    { text: 'About',   'link': '#About' },
    { text: 'Articles',  'link': '#Article' },
    { text: 'Map',  'link': '#Map', isNew: true }
  ],
};

app.render(document.body, <Layout {...config}/>);

const element = 'my-app';
new Home().mount(element);
new About().mount(element);
new Contact().mount(element);
new Article().mount(element);
new Map().mount(element);
