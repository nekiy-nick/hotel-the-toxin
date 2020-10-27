'use strict';

$('.my-datepicker').datepicker({
  classes: "js-datepicker",
  inline: true,
  multipleDates: 2,
  clearButton: true,
  navTitles: {
    days: 'MM <i>yyyy</i>'
  },
  dataMultipleDatesSeparator: ""
});