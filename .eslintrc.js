module.exports = {
  root: true,
  parserOptions: {
    ecmaVersion: 2017,
    sourceType: 'module'
  },
  extends: [
    'eslint:recommended',
    'plugin:ember/recommended'
  ],
  env: {
    browser: true
  },
  rules: {
    'ember/new-module-imports': 2,
    'ember/no-old-shims': 2,
    'ember/no-duplicate-dependent-keys': 2,
    'ember/no-jquery': 2,
    'ember/require-super-in-init': 2,
    'ember/named-functions-in-promises': 0
  }
};
