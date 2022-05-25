import {html, css, LitElement} from 'lit';
import {customElement, property} from 'lit/decorators.js';
import {ButtonStyle} from './ButtonStyle';

@customElement('custom-button')
export class CustomButton extends LitElement {
  @property({type: String}) class = '';

  static styles = css`${ButtonStyle}`;
  render() {
    return html`
      <button class="${this.class}"><slot></slot></button>
    `;
  }
}
