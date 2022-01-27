module.exports = {
  env: {
    browser : true,
    es2021  : true,
    node    : true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion : 'latest',
    sourceType  : 'module',
  },
  plugins: [
    'react',
  ],
  rules: {
    'key-spacing': [
      'error', {
        align: { beforeColon: true, afterColon: true, on: 'colon' },
      },
    ],
    'no-constant-condition': [
      'error', {
        checkLoops: false,
      },
    ],
    'global-require'            : 'off',
    'newline-per-chained-call'  : 'off',
    'import/no-dynamic-require' : 'off',
    quotes                      : ['error', 'single', { allowTemplateLiterals: true }],
    'class-methods-use-this'    : 'off',
  },
};
