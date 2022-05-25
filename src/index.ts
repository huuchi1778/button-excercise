import {CustomButton} from './Button';
export {CustomButton};

document.addEventListener('DOMContentLoaded', _ => {
  const cusBtn = document.createElement('custom-button') as unknown as CustomButton;
  cusBtn.text = 'custom button';
  cusBtn.type = 'normal';

  document.getElementById('button-div').appendChild(cusBtn as unknown as HTMLElement);
});

document.addEventListener('DOMContentLoaded', _ => {
  console.log('hi');
  const cusBtnHtml = `<custom-button type="submit" text="AAA"></custom-button>`;
  document.getElementById('button-div').innerHTML = cusBtnHtml;
});
