'use strict';

let chart = document.querySelector('.pie-chart__diagram').getContext("2d");

let gradient = chart.createLinearGradient(0, 0, 0, 400);
  gradient.addColorStop(0, 'hsla(43, 100%, 81%, 1)');   
  gradient.addColorStop(.5, 'hsla(18, 100%, 81%, 1)');

let secondGradient = chart.createLinearGradient(0, 0, 0, 400);
  secondGradient.addColorStop(0, 'hsla(145, 50%, 62%, 1)');
  secondGradient.addColorStop(.5, 'hsla(191, 76%, 66%, 1)');

let thirdGradien = chart.createLinearGradient(0, 0, 0, 400);
  thirdGradien.addColorStop(0, 'hsla(259, 100%, 81%, 1)');
  thirdGradien.addColorStop(.5, 'hsla(227, 91%, 76%, 1)');

let fourthGradient = chart.createLinearGradient(0, 0, 0, 400);
  fourthGradient.addColorStop(.5, 'hsla(0, 0%, 57%, .8)');
  fourthGradient.addColorStop(0, 'hsla(227, 31%, 35%, 1)');


const myChart = new Chart(chart, {
  type: 'pie',
  data: {
    labels: ['Разочарован', 'Удовлетворительно', 'Хорошо', 'Великолепно'],
    datasets: [{
        label: 'Впечатления от номера',
        lineWidth: 0,
        data: [0, 65, 65, 130],
        backgroundColor: [    
            fourthGradient,
            thirdGradien,
            secondGradient,
            gradient,
        ],
        borderColor: '#fff',
        borderWidth: 4,
        hoverBorderColor: 'transparent',
    }],
    
  },
  options: {

    layout: {
      padding: {
        left: -40,
      },
    },

    // убирает подсказки, которые появляются при наведении на сектор диаграммы
    tooltips: {
      enabled: false,
    },
    // убирает легенду - список тайтлов
    legend:{
      display: false
    },
    animation: {
      duration: 3000,
    },
    cutoutPercentage: 86,
    scales: {
      
        xAxes: [{
          ticks: {
            display: false,
          },
          gridLines: {
            display: false,
          },
        }],
        yAxes: [{
            ticks: {
                display: false,
            },
            gridLines: {
              display: false,
          },
        }]
    }
  }
});

// console.log(myChart.data.datasets[0].data.length);