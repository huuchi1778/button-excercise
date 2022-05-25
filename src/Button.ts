import {html, css, LitElement} from 'lit';
import {customElement, property} from 'lit/decorators.js';
import {ButtonStyle} from './ButtonStyle';


type ButtonProps = {
  type?: 'normal' | 'submit';
  text?: string;
}

@customElement('custom-button')
export class CustomButton extends LitElement {
  @property({type: String}) type = 'normal';
  @property({type: String}) text = '';

  static styles = css`${ButtonStyle}`;
  render() {
    return html`
      <button>${this.text}</button>
    `;
  }
}
