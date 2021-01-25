'use strict';

const signInPage = document.querySelector('.sign-in');

function setBackgroundImage() {
  // Здесь убираю background-image при ширине экрана менее 360px и в стилях sign-in ставлю просто фон
  if (screen.width < 360) return;

  const signInPageImages = ['sign-in-1.png', 'sign-in-2.png'];

  let n = 1;
  setInterval(() => {
    if (n === signInPageImages.length) n = 1;
    else  n++;
    signInPage.style.backgroundImage = `url('/assets/img/sign-in-${n}.png')`;
  }, 5000);
}

setBackgroundImage();