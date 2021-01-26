'use strict';

const registrationPage = document.querySelector('.registration');

function setBackgroundImage() {
  // Здесь убираю background-image при ширине экрана менее 360px и в стилях registration ставлю просто фон
  if (screen.width < 360) return;

  const registrationPageImages = ['registration-1.png', 'registration-2.png'];

  let n = 1;
  setInterval(() => {
    if (n === registrationPageImages.length) n = 1;
    else  n++;
    registrationPage.style.backgroundImage = `url('/assets/img/registration-${n}.png')`;
  }, 5000);
}

setBackgroundImage();