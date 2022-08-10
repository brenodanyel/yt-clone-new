module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      },
    },
  },
  plugins: [
    'react',
    '@typescript-eslint',
  ],
  rules: {
    'no-console': 0,
    'import/prefer-default-export': 0,
    'import/no-extraneous-dependencies': [1, { devDependencies: true }],
    'react/jsx-filename-extension': [1, { extensions: ['.tsx'] }],
    'import/extensions': 0,
    'no-unused-vars': [2, { args: 'all', argsIgnorePattern: '^_' }],
  },
};
