'use strict';

const rating = document.querySelectorAll('.js-rating');

rating.forEach(item => {

  item.addEventListener('click', (e) => {
    const listBtn = item.querySelectorAll('.js-rating__star');

    // инициализация функций

    // взять дата-атрибут у кнопки для дальнейшей проверки по нему в цикле
    const getParentDataCount = (star) => {
      return star.parentElement.getAttribute('data-rating');
    };

    // добавить списку дата-атрибут с поставленной оценкой
    const setItemDataAttribute = (item) => {
      item.setAttribute('data-mark', `${getParentDataCount(e.target)}`);
    };
    
    const removeItemDataAttribute = (item) => {
      item.removeAttribute('data-mark');
    };

    const setStarDataAttribute = (star) => {
      star.setAttribute('data-rating', 'check');
    };

    const removeStarDataAttribute = (star) => {
      star.removeAttribute('data-rating');
    };

    // установка рейтинга
    const setRating = (star) => {
      for (let i = 0; i < getParentDataCount(star); i++) {
        listBtn[i].innerText = 'grade';
        setStarDataAttribute(star);
        setItemDataAttribute(item);
        star.classList.add('rating__star_check')
      }
    };

    // удаление рейтинга
    const clearRating = (star) => {
      for (let i = 0; i < listBtn.length; i++) {
        listBtn[i].innerText = 'star_border';
        removeStarDataAttribute(listBtn[i]);
        removeItemDataAttribute(item);
        listBtn[i].classList.remove('rating__star_check')
      }
    };

    const vote = (star) => {
      if (star.hasAttribute('data-rating')) {
        clearRating(star);
      } else {
        clearRating(star);
        setRating(star);
      }
    };

    const checkTargetElement = (element) => {
      for (let btn of listBtn) {
        if (element == btn) return true;
      }
    };

    if (checkTargetElement(e.target)) {
      vote(e.target);
    }  
  })
})