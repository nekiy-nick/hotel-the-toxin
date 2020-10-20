'use strict';

let likeBtn = document.querySelectorAll('.js-like-button');

likeBtn.forEach(btn => btn.addEventListener('click', e => {
  btn.classList.toggle('like-button_active');
  if (btn.classList.contains('like-button_active')) {
    btn.textContent = `${Number(btn.textContent) + 1}`;
  } else {
    btn.textContent = `${Number(btn.textContent) - 1}`;
  }

  checkBtnLength();

  function checkBtnLength() {
    if (btn.textContent.length > 3 && !btn.classList.contains('like-button_thousand') || btn.textContent.length > 4) {
      btn.classList.remove('like-button_hundred');
      btn.classList.add('like-button_thousand');
    } else if (btn.textContent.length > 2 && !btn.classList.contains('like-button_hundred')) {
      btn.classList.remove('like-button_thousand');
      btn.classList.add('like-button_hundred');
    } else if (btn.textContent.length <= 2 ) {
      btn.classList.remove('like-button_hundred');
    } else return;
  }
}));