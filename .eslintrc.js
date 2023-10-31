module.exports = {
  parser: '@typescript-eslint/parser', // Specifies the ESLint parser
  parserOptions: {
    ecmaVersion: 2018, // Allows for the parsing of modern ECMAScript features
    sourceType: 'module', // Allows for the use of imports
    project: 'tsconfig.json', // Allow to use rules which require type information
    tsconfigRootDir: __dirname,
    extraFileExtensions: ['.json'],
  },
  extends: ['plugin:react/recommended', 'plugin:@typescript-eslint/recommended', 'prettier/@typescript-eslint', 'plugin:prettier/recommended', 'plugin:react/jsx-runtime', 'plugin:storybook/recommended'],
  plugins: [
    '@typescript-eslint',
    'prettier',
    'react',
    'react-hooks',
    'moment-utc',
    'unused-imports',
    'simple-import-sort',
    '@emotion',
    'regex',
    'jsx-expressions',
  ],
  settings: {
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx'],
    },
    'import/resolver': {
      typescript: {},
    },
    react: {
      version: 'default',
    },
    'mdx/code-blocks': true,
  },
  rules: {
    'no-shadow': 'off',
    '@typescript-eslint/no-shadow': ['warn'],
    'no-console': 'warn',
    'no-nested-ternary': 'error',
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'error',
    'jsx-quotes': ['warn', 'prefer-double'],
    'react/jsx-filename-extension': ['error', { extensions: ['.ts', '.tsx'] }],
    'react/prop-types': 'off',
    '@emotion/jsx-import': 'off',
    '@emotion/pkg-renaming': 'error',
    '@typescript-eslint/explicit-function-return-type': [
      'off',
      {
        allowExpressions: true,
      },
    ],
    'no-restricted-imports': [
      'warn',
      {
        paths: [
          {
            name: 'next/link',
            message: 'Use custom linkTo components instead of next Link',
          },
        ],
      },
    ],
    'moment-utc/no-moment-without-utc': 'error',
    'react/jsx-uses-react': 'off',
    'react/react-in-jsx-scope': 'off',
    'react/jsx-uses-vars': 1,
    '@typescript-eslint/no-unused-vars': 'off',
    'unused-imports/no-unused-imports-ts': 'error',
    'unused-imports/no-unused-vars-ts': [
      'error',
      { vars: 'all', args: 'none', ignoreRestSiblings: true },
    ],
    '@typescript-eslint/ban-types': 0,
    curly: 'warn',
    'sort-imports': 'off',
    'import/order': 'off',
    'simple-import-sort/imports': [
      'error',
      {
        groups: [['^\\u0000'], ['^(?!@)\\w'], ['^@!?(?!src)\\w'], ['^@bellman-monorepo/design-system\\w'], ['^'], ['^\\.']],
      },
    ],
    'simple-import-sort/exports': 'error',
    'regex/invalid': [
      'error',
      [
        {
          regex: '\\/\\*\\* \\@jsx jsx \\*\\/',
          message: 'Do not use /** @jsx jsx */',
          replacement: '',
          files: {
            inspect: 'src/(.*).[t,j]?sx$',
          },
        },
        {
          regex: "import React,\\s(.*)\\sfrom 'react'",
          message: 'Do not import React',
          replacement: { function: "return `import ${$[1]} from 'react'`" },
          files: {
            inspect: 'src/(.*).[t,j]?sx$',
          },
        },
        {
          regex: "import React from 'react'",
          message: 'Do not import React',
          replacement: '',
          files: {
            inspect: 'src/(.*).[t,j]?sx$',
          },
        },
        {
          regex: '": "[<>~^*]',
          message: 'Use exact version only.',
          files: {
            inspect: 'package.json',
          },
        },
      ],
    ],
    'jsx-expressions/strict-logical-expressions': 'error',
  },
}
