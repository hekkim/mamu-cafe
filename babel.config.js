module.exports = {
  presets: ['@babel/react', '@babel/typescript', '@babel/env'],
  plugins: [
    'babel-plugin-styled-components',
    ['@babel/plugin-proposal-decorators', { legacy: true }],
    ['@babel/plugin-proposal-class-properties', { loose: true }],
  ],
};
