/* eslint-disable @typescript-eslint/no-var-requires */

const merge = require('webpack-merge');
const TerserWebpackPlugin = require('terser-webpack-plugin');

const common = require('./webpack.common');

module.exports = merge(common, {
  mode: 'production',
  devtool: 'hidden-source-map',
  plugins: [
    new TerserWebpackPlugin({
      sourceMap: true,
    }),
  ],
});
