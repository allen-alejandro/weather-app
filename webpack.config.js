const webpack = require('webpack');
const Dotenv = require('dotenv-webpack');
const path = require('path');

const config = {
  entry: ['react-hot-loader/patch', './src/index.js'],
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        use: 'babel-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.svg$/,
        use: 'file-loader',
      },
    ],
  },
  devServer: {
    static: {
      directory: './dist',
    },
    compress: true,
    port: 3000,
  },
  plugins: [new Dotenv()],
  resolve: {
    alias: {
      'react-dom': '@hot-loader/react-dom',
    },
  },
};

module.exports = config;
