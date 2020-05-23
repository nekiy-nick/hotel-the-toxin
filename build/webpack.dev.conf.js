const webpack = require('webpack');
const merge = require('webpack-merge');
const baseWebpackConfig = require('./webpack.base.conf');

const devWebpackConfig = merge(baseWebpackConfig, {
  // здесь можно описать, что нам нужно делать для дев

  mode: 'development',
  // здесь указывается где будет открываться вебпак
  output: {
    publicPath: '/'
  },
  devtool: 'cheap-module-eval-source-map',
  devServer: {
    contentBase: baseWebpackConfig.externals.paths.dist,
    // лучшая практика - для девСервера указать порт 8081
    // чтобы облегчить жизнь всем другим серверам
    port: 8081,
    overlay: {
      // предупреждения - для новичков полезно, можно выключить позже..
      warnings: true,
      errors: true
    }
  },
  plugins: [
    // карта сайта для разработки - лучшая - быстрее всех собирается и даёт полезную инфу
    new webpack.SourceMapDevToolPlugin({
      filename: '[file].map'
    })
  ]
});
// экспортируем нашу настройкy
module.exports = new Promise((resolve, reject) => {
  resolve(devWebpackConfig)
});