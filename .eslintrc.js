module.exports = {
  extends: ['./packages/eslint'],
  parserOptions: {
    project: ['./tsconfig.eslint.json', './packages/*/tsconfig.json'],
    tsconfigRootDir: __dirname,
  },
  globals: {
    maybe: 'readonly',
    isMaybe: 'readonly',
  },
};
