const merge = require("webpack-merge");
const baseWebpackConfig = require("./webpack.base.conf");

const buildWebpackConfig = merge(baseWebpackConfig, {
  // здесь можно описать, что нам нужно делать для билда
  mode: "production",
  plugins: []
});
// экспортируем нашу настройкy
module.exports = new Promise((resolve, reject) => {
  resolve(buildWebpackConfig)
});