module.exports = {
  extends: [
      '../../.eslintrc.base.js',
  ],
  rules: {
    '@typescript-eslint/explicit-function-return-type': false,
    '@typescript-eslint/camelcase': 'off',
    '@typescript-eslint/no-var-requires': 'off'
  }
};
