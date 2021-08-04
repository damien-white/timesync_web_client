// TypeScript-specific plugins; Strict checks
const typeScriptPlugins = [
  'eslint:recommended',
  'plugin:@typescript-eslint/recommended',
  'plugin:@typescript-eslint/recommended-requiring-type-checking',
];

// eslint-plugin-import
const importPlugins = [
  'plugin:import/errors',
  'plugin:import/warnings',
  'plugin:import/typescript',
];

const config = {
  root: true,
  extends: [
    'react-app',
    'react-app/jest',
    ...typeScriptPlugins,
    ...importPlugins,
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
  /* NOTE: ESLint rules settings are relaxed during initial development */
  rules: {
    'no-prototype-builtins': 'off',
    /** Prettier - use 'warn'; formatter automatically runs via pre-commit hook */
    'prettier/prettier': 'warn',
    // '@typescript-eslint/explicit-module-boundary-types': 'off',
    // prefer usage of explicit types
    '@typescript-eslint/no-inferrable-types': 'off',
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
};

module.exports = config;
