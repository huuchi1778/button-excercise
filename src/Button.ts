import {html, css, LitElement} from 'lit';
import {customElement, property} from 'lit/decorators.js';
import {ButtonStyle} from './ButtonStyle';

@customElement('custom-button')
export class CustomButton extends LitElement {
  @property({type: String}) class = 'normal'; // normal is the default

  // error checking for invalid class name
  static styles = css`${ButtonStyle}`;

  render() {
    return html`
      <button class="${this.class}"><slot>Default text</slot></button>
    `;
  }
}
