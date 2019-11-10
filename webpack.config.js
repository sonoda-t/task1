var path = require('path');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: {
    style: './src/sass/style.scss',
    //sub: './src/sass/sub.scss'
  },
  output: {
    path: path.join(__dirname, './public/css'),
    filename: '[name].css'
  },
  module: {
    rules: [
      {


        test: /\.scss$/,
        //loader: ExtractTextPlugin.extract('css-loader!sass-loader')
          use: ExtractTextPlugin.extract({
            fallback: "style-loader",
            use: [
              // CSSをバンドルするための機能
              {
                loader: 'css-loader',
                options: {
                  // CSS内のurl()メソッドの取り込みを禁止する
                  url: false,
                  // ソースマップの利用有無
                  sourceMap: true,
                  // 空白文字やコメントを削除する
                  minimize: true,
                  // Sass+PostCSSの場合は2を指定
                  importLoaders: 2
                },
              },
              // Sassをバンドルするための機能
              {
                loader: 'sass-loader',
                options: {
                  // ソースマップの利用有無
                  sourceMap: true,
                }
              }
            ],
          })


      }
    ]
  },
  plugins: [
    new ExtractTextPlugin('[name].css')
  ],
}
