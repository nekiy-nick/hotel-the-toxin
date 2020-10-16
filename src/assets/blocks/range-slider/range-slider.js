'use strict';

let rangeSlider = document.querySelectorAll('.js-range-slider__slider');

$('.js-range-slider__slider').ionRangeSlider({
  type: 'double',
  min: 0,
  max: 15000,
  from: 5000,
  to: 10000,
  step: 50,
  hide_min_max: true,
  hide_from_to: true,
  extra_classes: 'range-slider__container',
  hideFromTo: true
});