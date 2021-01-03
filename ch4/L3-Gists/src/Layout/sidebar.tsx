import app from 'apprun';

export default ({ sidebar }) => <div class="sidebar">
  <nav class="sidebar-nav">
    <ul class="nav">
      <li class="nav-title">Menus</li>
      {sidebar && sidebar.map(({ text, link, icon, isNew }) =>
        <li class="nav-item">
          <a class="nav-link" href={link}>
            <i class={`nav-icon icon-${icon || 'options-vertical'}`}></i>
            {text}
            {isNew && <span class="badge badge-info">NEW</span>}
          </a>
        </li>
      )}
    </ul>
  </nav>
  <button class="sidebar-minimizer brand-minimizer" type="button"></button>
</div>;