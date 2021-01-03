import { app, Component } from 'apprun';

declare let $ ;

export default class ModalComponent extends Component {

  state = {}

  view = ({ title, body='', onOK=null }) => <div class="modal fade" id="staticBackdrop" data-backdrop="static" data-keyboard="false"
    tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="staticBackdropLabel">{title}</h5>
          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">
          {body}
        </div>
        <div class="modal-footer">
          {!onOK && <button type="button" class="btn btn-primary" data-dismiss="modal">Close</button>}
          {onOK && <>
            <button type="button" class="btn btn-secondary" data-dismiss="modal">Cancel</button>
            <button type="button" class="btn btn-primary" data-dismiss="modal" $onclick={ onOK }>OK</button>
          </>}
        </div>
      </div>
    </div>
  </div>;

  update = {
    '@show-modal': (_, state) => {
      $('.modal').modal();
      return state;
    }
  }
}