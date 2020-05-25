// модуль path нужен для коректного поиска пути точки выхода
const path = require("path");
const fs = require("fs");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

const PATHS = {
  src: path.join(__dirname, "../src"),
  dist: path.join(__dirname, "../dist"),
  assets: "assets/"
};

// Из видео 7 ПАГ
const PAGES_DIR = PATHS.src;
// В таком случае весь HTML будет браться из дериктории html и попадать в папку dist
// const PAGES_DIR = `${PATHS.src}/pug/pages`
const PAGES = fs.readdirSync(PAGES_DIR)
  .filter(filename => filename.endsWith(".pug"));


module.exports = {

  externals: {
    paths: PATHS
  },

  entry: {
    app: PATHS.src
    // module: `${PATHS.src}/your-module.js`,
  },
  output: {
    // [name] нужен чтобы на выходе не было коллизий с именами, т.к. может быть несколько точек входа
    // и в [name] попадёт ярлык \ ключ из entry
    filename: `${PATHS.assets}js/[name].[hash].js`,
    path: PATHS.dist,
    // нужна для корректной работы при build
    publicPath: "./"
  },

  optimization: {
    splitChunks: {
      cacheGroups: {
        vendor: {
          name: "vendors",
          test: /node_modules/,
          chunks: "all",
          enforce: true
        }
      }
    }
  },

  module: {
    rules: [
    {
      test: /\.pug$/,
      loader: "pug-loader",
    },
    {
      test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
      loader: "url-loader",
      options: {
        name: "[name].[ext]"
      }
    }, {
      // images / icons
      test: /\.(png|jpg|gif|svg)$/,
      loader: "url-loader",
      options: {
        name: "[name].[ext]"
      }
    }, {
      test: /\.scss$/,
      use: [
        "style-loader",
        MiniCssExtractPlugin.loader,
        {
          loader: "css-loader",
          // опции лоадера здесь желательно разбивать на чанки
          options: { sourceMap: true }
        }, {
          loader: "postcss-loader",
          options: { 
            sourceMap: true, 
            config: { path: `./postcss.config.js` } 
          }
        }, {
          loader: "sass-loader",
          options: { sourceMap: true }
        }
      ]
    }, {
      test: /\.css$/,
      use: [
        "style-loader",
        // этот лоадер отделяет css код от js 
        MiniCssExtractPlugin.loader,
        {
          loader: "css-loader",
          options: { sourceMap: true }
        }, {
          loader: "postcss-loader",
          options: { 
            sourceMap: true, 
            config: { path: `./postcss.config.js` } 
          }
        }
      ]
    }    
    ]
  },

// Аллиасы
  resolve: {
    alias: {
      '~': PATHS.src
    }
  },
 
// массив в который мы передаём все плагины
  plugins: [
    new MiniCssExtractPlugin({
      filename: `${PATHS.assets}css/[name].[contenthash].css`
    }),
    // new HtmlWebpackPlugin({
    //   // выключение подключения скрипта и стиля в файл index.html автоматом
    //   inject: true,
    //   template: `${PATHS.src}/index.html`,
    //   filename: './index.html',
    //   title: 'Webpack Template',
    // }),
    // откуда и куда копируем
    new CopyWebpackPlugin([
      { from: `${PATHS.src}/${PATHS.assets}img`, to: `${PATHS.assets}img` },
      { from: `${PATHS.src}/${PATHS.assets}fonts`, to: `${PATHS.assets}fonts` },
      { from: `${PATHS.src}/static`, to: ""}
    ]),
    new CleanWebpackPlugin(),
    
    ...PAGES.map(
      page => 
        new HtmlWebpackPlugin({
          template: `${PAGES_DIR}/${page}`,               // .pug
          filename: `./${page.replace(/\.pug/, '.html')}` // .html
        })
    )
  ]
};
// чтобы исключить файлы для обработки, используется -> exclude: '/node_modules/' например