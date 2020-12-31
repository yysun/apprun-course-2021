import { app, Component } from 'apprun';

export default class extends Component {

  view = ({ title, nav }) => <header class="app-header navbar">
    <button class="navbar-toggler sidebar-toggler d-lg-none mr-auto" type="button" data-toggle="sidebar-show">
      <span class="navbar-toggler-icon"></span>
    </button>
    <a class="navbar-brand" href="/">
      {title}
    </a>
    <button class="navbar-toggler sidebar-toggler d-md-down-none" type="button" data-toggle="sidebar-lg-show">
      <span class="navbar-toggler-icon"></span>
    </button>
    <ul class="nav navbar-nav d-md-down-none">
      {nav.map(({ text, link, active }) => <li class="nav-item px-3">
        <a class="nav-link" href={link}>{text}
          {active && <span class="sr-only">(current)</span>}
        </a>
      </li>)}
    </ul>
    <ul class="nav navbar-nav ml-auto"></ul>
    <button class="navbar-toggler aside-menu-toggler d-md-down-none" type="button" data-toggle="aside-menu-lg-show">
      <span class="navbar-toggler-icon"></span>
    </button>
    <button class="navbar-toggler aside-menu-toggler d-lg-none" type="button" data-toggle="aside-menu-show">
      <span class="navbar-toggler-icon"></span>
    </button>
  </header>

  update = [
    ['@head', state => state]
  ]
}