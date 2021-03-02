(function($) {
  $.fn.rangeSlider = function(options) {
    const settings = $.extend({
      // Здесь положить объект с настройками плагина по умолчанию
      vertical: false,
      range: {
        min: 0,
        max: 1000,
      },
      width: 300,
      height: 15,
    }, options);

    // Пока забыл для чего обходить все циклом
    this.each(function() {
      
    });
    // Добавление HTML структуры в вызывающий плагин элемент
    let $slider = $('<div>')
          .addClass('range-slider')
          .css({
            'width': settings.width,
            'height': settings.height,
          });
    const item1 = $('<div>')
          .attr('data-point', 'first-point')
          .addClass('my-range-slider__pull-item')
          .appendTo($slider);

    const item2 = $('<div>')
          .attr('data-point', 'second-point')
          .addClass('my-range-slider__pull-item')
          .appendTo($slider);

    const decor = $('<span>')
          .addClass('my-range-slider__decoration-range')
          .appendTo($slider)
          .css({
            'left': item1.offset().left,  
          });

    $(this).append($slider);

    // Метод, который позволяет выбрать геометрическую отрисовку (если передать аргумент vertical: true при вызове плагина, он отобразится по вертикали)
    this.vertical = function() {
        $slider
          .addClass('range-slider_vertical')
          .css({
            'width': settings.height,
            'height': settings.width,
          });
        return this;
      }

    if (settings.vertical) {
      this.vertical();
    }
    // console.log(item1.offset().left)
    // console.log(item2.offset().left)

    // Проба сделать перетаскивание зажатой клавишей мыши первого ползунка
    if (!settings.vertical) {
      item1.on('mousedown', (e) => {
        // console.log(item1.offset().left)
        e.stopPropagation();
        item1.css({  
          // 'left': item1.offset().left
        })
      })
    
      $slider.on('click', (e) => {
        // console.log(e.pageX)
        // console.log($(this).css('width'))
        // console.log(parseInt($(this).css('width')) - (item1.offset().left + item2.offset().left))
        console.log(item1.offset().left)
        console.log(item2.offset().left)
        // console.log(parseInt($(this).css('width')))
        item1
        .animate({
          'left': e.clientX - $(this).offset().left
        }, 400);
        // decor.css({
        //   'left': e.clientX - $(this).offset().left
        //   // 'width': $slider.css('width') - (item1.offset().left + item2.offset().left),
        // })
        decor.animate({
          'left': e.clientX - $(this).offset().left,
          'width': parseInt($(this).css('width')) + (item1.offset().left - item2.offset().left),
          // 'width': 200
        }, 400);
      });
    }    
    return this;
  };
})(jQuery);