module.exports = {
  env: { browser: true, es2020: true, node: true },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/strict-type-checked',
    'plugin:@typescript-eslint/stylistic-type-checked',
    'plugin:import-x/recommended',
    'plugin:import-x/typescript',
    'plugin:deprecation/recommended',
    'eslint-config-prettier',
  ],
  parser: '@typescript-eslint/parser',
  rules: {
    '@typescript-eslint/no-unsafe-call': 'off',
  },
  overrides: [
    {
      files: ['**/*.test.ts'],
      env: { jest: true },
      rules: {
        '@typescript-eslint/no-unsafe-call': 'off',
        '@typescript-eslint/no-unsafe-member-access': 'off',
      },
    },
  ],
};
