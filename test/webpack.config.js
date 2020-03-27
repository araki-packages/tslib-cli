const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  target: 'web',
  devtool: 'source-map',
  entry: ['./src/index.ts'],
  output: {
    filename: 'bundle.js',
    path: __dirname + './dist',
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)/,
        use: [{ loader: 'ts-loader', }]
      },
      {
        test: /\.(gif)/,
        use: [{ loader: 'url-loader', }]
      },
      {
        test: /\.(jpg|png)/,
        use: [{ loader: 'url-loader', }]
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.ts', '.tsx'],
  },
  plugins: [
    new HtmlWebpackPlugin({
      inject: true,
      template: path.resolve(__dirname, './src/index.html'),
      minify: {
        collapseWhitespace: true
      }
    }),
  ],
  devServer: {
    contentBase: '/dist',
    port: 3030,
    // 他デバイスで見たい時用
    host: '0.0.0.0',
    hot: true,
    overlay: true,
    filename: 'bundle.js',
    publicPath: '/',
    stats: {
      colors: true
    },
    historyApiFallback: true
  }
};