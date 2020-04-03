import Component from '@glimmer/component';

export default class AuTextarea extends Component {
  get widthClass() {
    if (this.args.width == "block")
      return "au-c-textarea--block";
    else
      return "";
  }

  get errorClass() {
    if (this.args.error == "error")
      return "au-c-textarea--error";
    else
      return "";
  }
}
