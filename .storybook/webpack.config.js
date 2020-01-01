const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = async ({ config, mode }) => {
  config.module.rules.push({
    test: /\.[jt]sx?$/,
    exclude: /node_modules/,
    loader: 'babel-loader',
    include: path.resolve(__dirname, '../'),
  });

  config.resolve = {
    modules: [path.resolve(__dirname, '../src'), 'node_modules'],
    extensions: ['.js', '.jsx', '.ts', '.tsx'],
  };

  return config;
};
