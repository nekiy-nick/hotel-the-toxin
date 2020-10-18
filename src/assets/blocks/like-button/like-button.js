'use strict';

let likeBtn = document.querySelectorAll('.js-like-button');

likeBtn.forEach(btn => btn.addEventListener('click', e => {
  btn.classList.toggle('like-button_active');
  if (btn.classList.contains('like-button_active')) {
    btn.textContent = `${Number(btn.textContent) + 1}`;
  } else {
    btn.textContent = `${Number(btn.textContent) - 1}`;
  }
}));