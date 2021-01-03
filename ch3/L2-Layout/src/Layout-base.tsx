
import app from 'apprun';

export default () => <>
  <header class="app-header navbar">
    <button class="navbar-toggler sidebar-toggler d-lg-none mr-auto" type="button" data-toggle="sidebar-show">
      <span class="navbar-toggler-icon"></span>
    </button>
    <a class="navbar-brand" href="/">
      <span class="navbar-brand-full">DEV Reader</span>
      <span class="navbar-brand-minimized">DEV</span>
    </a>
    <button class="navbar-toggler sidebar-toggler d-md-down-none" type="button" data-toggle="sidebar-lg-show">
      <span class="navbar-toggler-icon"></span>
    </button>
    <ul class="nav navbar-nav d-md-down-none">
      <li class="nav-item px-3">
        <a class="nav-link" href="#Home">Home</a>
      </li>
      <li class="nav-item px-3">
        <a class="nav-link" href="#Contact">Contact</a>
      </li>
      <li class="nav-item px-3">
        <a class="nav-link" href="#About">About</a>
      </li>
    </ul>
    <ul class="nav navbar-nav ml-auto"></ul>
    <button class="navbar-toggler aside-menu-toggler d-md-down-none" type="button" data-toggle="aside-menu-lg-show">
      <span class="navbar-toggler-icon"></span>
    </button>
    <button class="navbar-toggler aside-menu-toggler d-lg-none" type="button" data-toggle="aside-menu-show">
      <span class="navbar-toggler-icon"></span>
    </button>
  </header>
  <div class="app-body">
    <div class="sidebar">
      <nav class="sidebar-nav">
        <ul class="nav">
          <li class="nav-title">Menus</li>
          <li class="nav-item">
            <a class="nav-link" href="#Home">
              <i class="nav-icon icon-home"></i>
              Home
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#Contact">
              <i class="nav-icon icon-options-vertical"></i>
              Contact
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#About">
              <i class="nav-icon icon-options-vertical"></i>
              About
            </a>
          </li>
        </ul>
      </nav>
      <button class="sidebar-minimizer brand-minimizer" type="button"></button>
    </div>
    <main class="main">
      <ol class="breadcrumb">
        <li class="breadcrumb-item">Home</li>
      </ol>
      <div class="container-fluid">
        <div class="card">
          <div class="card-body" id="my-app"></div>
        </div>
      </div>
    </main>
    <aside class="aside-menu">
    </aside>
  </div>
  <footer class="app-footer">
  </footer>
</>;
