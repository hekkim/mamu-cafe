module.exports = {
  "presets": [
    "@babel/react",
    "@babel/typescript",
    "@babel/env"
  ]
}
/*
module.exports = {
  presets: [
    [
      '@babel/env',
      {
        modules: 'commonjs',
        targets: {
          ie: '11',
          chrome: '58',
        },
      },
    ],
    '@babel/preset-typescript',
    '@babel/react',
  ],
  plugins: [
    [
      'module-resolver',
      {
        alias: {
          types: './types',
        },
      },
    ],
    'babel-plugin-styled-components',
    '@babel/proposal-class-properties',
    '@babel/proposal-export-default-from',
    '@babel/proposal-optional-chaining',
    '@babel/syntax-dynamic-import',
    '@babel/transform-parameters',
    '@babel/transform-runtime',
  ],
  env: {
    test: {
      presets: ['@babel/env', '@babel/preset-typescript', '@babel/react'],
      plugins: [
        'babel-plugin-styled-components',
        '@babel/proposal-class-properties',
        '@babel/proposal-export-default-from',
        '@babel/proposal-optional-chaining',
        '@babel/syntax-dynamic-import',
        '@babel/transform-parameters',
        '@babel/transform-runtime',
      ],
    },
  },
};
*/
