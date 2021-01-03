import app from 'apprun';

import Header from './header';
import Sidebar from './sidebar';
import Aside from './aside';
import Footer from './footer';
import Breadcrumb from './breadcrumb';
import Modal from './modal';

export default ({ title, nav, element, sidebar }) => <>
  <Header {...{ title, nav }}/>
  <div class="app-body">
    <Sidebar sidebar={sidebar}/>
    <main class="main">
      <Breadcrumb />
      <div class="container-fluid" >
        <div class="card">
          <div class="card-body" id={element}></div>
        </div>
      </div>
    </main>
    <Aside />
  </div>
  <Footer />
  <Modal/>
</>;
