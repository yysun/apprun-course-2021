import { app, Component } from 'apprun';

export default class Breadcrumb extends Component {

  state = '';

  view = route => <ol class="breadcrumb">
    <li class="breadcrumb-item">Home</li>
    <li class="breadcrumb-item">
      <a href="{route}">{ route.substring(1) }</a>
    </li>
  </ol>

  update = [
    ['//', (_, route) => route]
  ]
}