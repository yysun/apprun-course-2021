import app from 'apprun';

import Header from './header';
import Sidebar from './sidebar';
import Footer from './footer';
import Breadcrumb from './breadcrumb';
import Modal from './modal';

export default ({ title, nav, element, sidebar }) => <>
  <Header {...{ title, nav }}/>
  <div class="app-body">
    <div class="sidebar">
      <nav class="sidebar-nav ps ps--active-y">
        <Sidebar sidebar={sidebar}/>
        <div class="ps__rail-x">
          <div class="ps__thumb-x" tabindex="0"></div>
        </div>
        <div class="ps__rail-y">
          <div class="ps__thumb-y" tabindex="0"></div>
        </div>
      </nav>
      <button class="sidebar-minimizer brand-minimizer" type="button"></button>
    </div>
    <main class="main">
      <Breadcrumb />
      <div class="container-fluid" >
        <div class="card">
          <div class="card-body" id={element}></div>
        </div>
      </div>
    </main>
    <aside class="aside-menu">
      <div class="container-fluid" id="aside">
      </div>
    </aside>
  </div>
  <Footer />
  <Modal/>
</>;

app.on('show-aside', (on = true) => {
  if (on) {
    document.body.classList.remove('aside-menu-hidden');
    document.body.classList.add('aside-menu-show');
  } else {
    document.body.classList.add('aside-menu-hidden');
    document.body.classList.remove('aside-menu-show');
  }
});