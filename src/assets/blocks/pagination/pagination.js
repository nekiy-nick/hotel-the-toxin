'use strict';

// const { get } = require("jquery");

$(".pagination").pagination({
  dataSource: [1, 2, 3, 4, 5, 6, 7],
  callback: function(data, pagination) {
      // template method of yourself
      // let html = template(data);
      // $('.pagination-container').html(html);
  }

});