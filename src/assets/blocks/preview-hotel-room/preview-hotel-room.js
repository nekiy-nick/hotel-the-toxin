'use strict';

$('.js-preview-hotel-room__carousel').slick({  
    slidesToShow: 1,
    slideToScroll: 1,
    dots: true,
    lazyLoad: 'ondemand',
    autoplay: true,
	  autoplaySpeed: 2000,
    arrows: true,
    fade: true,
	  cssEase: 'linear'
});

$('.js-preview-hotel-room__carousel_none-arrow').slick({  
  slidesToShow: 1,
  slideToScroll: 1,
  dots: true,
  lazyLoad: 'ondemand',
  autoplay: true,
  autoplaySpeed: 2000,
  arrows: false,
  fade: true,
  cssEase: 'linear'
});