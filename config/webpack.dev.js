const merge = require('webpack-merge');

const common = require('./webpack.common');

module.exports = merge(common, {
  mode: 'development',
  devtool: 'eval-source-map',
  devServer: {
    hot: true,
    historyApiFallback: true,
    proxy: {
      '/api': {
        target:
          'http://ec2-13-125-254-245.ap-northeast-2.compute.amazonaws.com/',
        changeOrigin: true,
      },
    },
  },
});
