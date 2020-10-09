'use strict';

const rating = document.querySelectorAll('.js-rating');

rating.forEach(item => {
  item.addEventListener('click', putRatingHandler);
})

function putRatingHandler(star) {
  if(!star.target.matches('span')) return;
  let starList = star.target.parentElement.parentElement.children;
  let starItem = star.target.parentElement;
  let starTarget = star.target;

  if (revote(starTarget)) {
    starTarget.removeAttribute('data-rating');
    clearRating();
  } else {
    clearRating();
    setRating(starItem);
  }

  function setRating(starParent) {
    starTarget.setAttribute('data-rating', 'check');
    for (let i = 0; i <= starParent.getAttribute('data-rating'); i++) {
      starList[i].children[0].innerHTML = 'grade';
    }
  }

  function clearRating() {
    for (let i = 0; i < starList.length; i++) {
      starList[i].children[0].removeAttribute('data-rating');
      starList[i].children[0].innerHTML = 'star_border';
    }
  }

  function revote(star) {
    if (star.hasAttribute('data-rating')) {
      star.removeAttribute('data-rating');
      return true;
    }
  }
}