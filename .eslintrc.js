const config = {
  root: true,
  extends: [
    'react-app',
    'react-app/jest',
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:import/typescript',
    'plugin:jsx-a11y/recommended',
    'plugin:promise/recommended',
    'plugin:prettier/recommended',
  ],
  parserOptions: {
    project: './tsconfig.json',
  },
  plugins: [
    '@typescript-eslint',
    'import',
    'jest',
    'jsx-a11y',
    'import',
    'promise',
    'react',
    'react-hooks',
  ],
  rules: {
    'no-prototype-builtins': 'off',
    'prettier/prettier': 'warn',
    '@typescript-eslint/ban-types': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/no-inferrable-types': 'off',
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
};

module.exports = config;
