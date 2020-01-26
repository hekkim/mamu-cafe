module.exports = {
  presets: ['@babel/react', '@babel/typescript', '@babel/env'],
  plugins: [
    'babel-plugin-styled-components',
    '@babel/plugin-proposal-optional-chaining',
    ['@babel/plugin-transform-runtime', { regenerator: true }],
    ['@babel/plugin-proposal-decorators', { legacy: true }],
    ['@babel/plugin-proposal-class-properties', { loose: true }],
  ],
};
