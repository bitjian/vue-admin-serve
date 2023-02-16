module.exports = {
  globals: { logger: true },
  extends: ['@tencent/eslint-config-tencent', '@tencent/eslint-config-tencent/prettier'],
  ignorePatterns: ['!.*', 'dist', 'node_modules'],
  rules: {
    'no-underscore-dangle': 0,
    quotes: [
      'warn',
      'single',
      {
        allowTemplateLiterals: false,
      },
    ],
  },
};
