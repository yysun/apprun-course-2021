import app from 'apprun';

export default ({ sidebar }) => <ul ul class="nav">
  <li class="nav-title">Dashboard</li>
  <li class="nav-item"><a class="nav-link active" href="#Dashboard">
    <i class="nav-icon icon-speedometer"></i>Dashboard</a></li>
  <li class="nav-title">Menus</li>
  {sidebar && sidebar.map(({ text, link, icon, isNew }) =>
    <li class="nav-item">
      <a class="nav-link" href={link}>
        <i class={`nav-icon icon-${icon || 'drop'}`}></i>
        {text}
        {isNew && <span class="badge badge-info">NEW</span>}
      </a>
    </li>
  )}
</ul>;