import {css} from 'lit';
export const ButtonStyle = css`
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
