module.exports = {
  // массив подключенных постСиэсэс плагинов
  // npm i -D postcss-loader autoprefixer css-mqpacker cssnano
  plugins: [
    require('autoprefixer'),
    // этот плагин сжимает все медиаКвери в один файл
    require('css-mqpacker'),
    require('cssnano')({
      preset: [
        'default'
        //, {
        //   discardComments: {
        //     removeAll: true,
        //   }
        // } данный плагин комментарии удаляет по умолчанию
      ]
    }),
  ]
}