import app from 'apprun';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Article from './pages/Article';
import Layout from './Layout';

app.render(document.body, <Layout />);

const element = 'my-app';
const pages = [Home, About, Contact, Article];
pages.forEach(C => new C().mount(element));
