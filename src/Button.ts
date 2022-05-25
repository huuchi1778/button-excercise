// @ts-nocheck
import {html, css, LitElement} from 'lit';
import {customElement, property} from 'lit/decorators.js';


type ButtonProps = {
  type?: 'normal' | 'submit';
  text?: string;
}

@customElement('custom-button')
export class CustomButton extends LitElement {
  @property({type: String}) type = 'normal';
  @property({type: String}) text = '';

  static styles = css`
    .normal {
      border: 1px solid #e3e7e8;
      background-color: #f7f9fa;
      box-shadow: 1px 1px 1px #ffffff inset;
      color: #3498db;
    }
    .normal:hover {
      background-color: #c8d6dd;
      box-shadow: none;
      cursor: pointer;
    }

    .submit {
      border: 1px solid #e3e7e8;
      background-color: #3498db;
      color: #ffffff;
    }
    .submit:hover {
      background-color: #1d6fa5;
      cursor: pointer;
    }

    button {
      font-size: 16px;
      min-width: 163px;
      height: 48px;
      padding: 0px 16px;
      user-select: none;
    }
  `;
  render() {
    return html`
      <button>${this.text}</button>
    `;
  }
}
