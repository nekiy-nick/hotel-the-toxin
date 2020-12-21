'use strict';

let feedbackWrapper = document.querySelector('.js-feedback-wrapper');
let feedbackCountInt = feedbackWrapper.querySelector('.js-feedback-wrapper__feedback-count');
let feedbackList = feedbackWrapper.querySelectorAll('.js-feedback');
let feedbackCountString = feedbackWrapper.querySelector('.js-feedback-wrapper__feedback-span');

feedbackCountInt.innerText = feedbackList.length;

const renderCountString = function() {
  let string = '';
  if (feedbackList.length !== 11 && feedbackList.length % 10 == 1) {
    string = 'отзыв';
  } else if ((feedbackList.length !== 12 || feedbackList.length !== 13 || feedbackList.length !== 14) && (feedbackList.length % 10 == 2 || feedbackList.length % 10 == 3 || feedbackList.length % 10 == 4) || (feedbackList.length == 22 || feedbackList.length == 33 ||feedbackList.length == 44)) {
    string = 'отзыва';
  } else {
    string = 'отзывов';
  }
  feedbackCountString.innerText = string;
};

renderCountString();