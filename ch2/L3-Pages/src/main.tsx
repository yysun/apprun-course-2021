import app from 'apprun';
import Home from './Home';
import About from './About';
import Contact from './Contact';
import Article from './Article';
import Layout from './Layout';

app.render(document.body, <Layout />);

const element = 'my-app';
new Home().mount(element);
new About().mount(element);
new Contact().mount(element);
new Article().mount(element);
