'use strict';

const landingPage = document.querySelector('.landing-page');

function setBackgroundImage() {
  // Здесь убираю background-image при ширине экрана менее 360px и в стилях landing-page ставлю просто фон
  if (screen.width < 360) return

  const landingPageImages = ['landing-page.png-1.png', 'landing-page-2.png', 'landing-page3.png']

  let n = 1;
  setInterval(() => {
    if (n === landingPageImages.length) n = 1;
    else  n++;
    landingPage.style.background = `url('/assets/img/landing-page-${n}.png')`
  }, 5000);
}

setBackgroundImage();