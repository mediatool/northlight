const javascriptRules = {
  'array-bracket-spacing': [ 'error', 'always' ],
  'arrow-parens': [ 'error', 'always' ],
  camelcase: [ 'error', {
    allow: [
      'UNSAFE_componentWillMount',
      'UNSAFE_componentWillReceiveProps',
      'UNSAFE_componentWillUpdate',
      '^_mt_',
    ],
    ignoreDestructuring: true,
  } ],
  'comma-dangle': [ 'error', {
    arrays: 'always-multiline',
    objects: 'always-multiline',
    imports: 'always-multiline',
    exports: 'always-multiline',
    functions: 'never',
  } ],
  'func-names': 0,
  'function-paren-newline': 'off',
  'global-require': 0,
  'import/extensions': 0,
  'import/no-import-module-exports': 'off',
  'import/no-extraneous-dependencies': [
    'error',
    {
      devDependencies: [
        '**/demo/**/*.*',
        '**/features/**/*.*',
        '**/test/**/*.*',
        '**/lib/**/*-test.*',
        '**/lib/**/*-stories.*',
        '**/scripts/**/*.*',
        '**/stories/**/*.*',
        '**/sandbox/**/*.*',
        '**/rollup.config.*',
        '**/vite.config.*',
      ],
    },
  ],
  'import/prefer-default-export': 'off',
  'jsx-a11y/anchor-is-valid': 'off',
  'jsx-a11y/click-events-have-key-events': 'off', // Consider enabling later
  'jsx-a11y/control-has-associated-label': 'off',
  'jsx-a11y/interactive-supports-focus': 'off', // Consider enabling later
  'jsx-a11y/label-has-associated-control': 'off',
  'jsx-a11y/label-has-for': 'off',
  'jsx-a11y/no-autofocus': 'off',
  'jsx-a11y/no-noninteractive-element-interactions': 'off',
  'jsx-a11y/no-static-element-interactions': 'off', // Consider enabling later
  'implicit-arrow-linebreak': 'off',
  'no-multiple-empty-lines': [ 'warn', { max: 1, maxBOF: 0, maxEOF: 0 } ],
  'no-nested-ternary': 'off',
  'no-underscore-dangle': 0,
  'no-unused-vars': [ 'error', {
    vars: 'all',
    args: 'all',
    argsIgnorePattern: '^_',
    ignoreRestSiblings: false,
  } ],
  'object-curly-newline': [ 'warn', { consistent: true } ],
  'operator-linebreak': 'off',
  'react/destructuring-assignment': 'off',
  'react/function-component-definition': 'off',
  'react/jsx-boolean-value': [ 'error', 'always' ],
  'react/jsx-curly-newline': 'off',
  'react/jsx-curly-spacing': [ 2, { when: 'always', children: true } ],
  'react/jsx-one-expression-per-line': 'off',
  'react/jsx-props-no-spreading': 'off',
  'react/no-multi-comp': 0,
  'react/no-unescaped-entities': 'off',
  'react/prefer-es6-class': 0,
  'react/prop-types': 0,
  'react/react-in-jsx-scope': 0,
  'react/require-default-props': 'off',
  'react/jsx-no-useless-fragment': [
    'error',
    { allowExpressions: true },
  ],
  semi: [ 'error', 'never' ],
  'sort-imports': [ 'warn', { ignoreDeclarationSort: true } ],
  'space-before-function-paren': [ 'error', 'always' ],
}

const typescriptRules = {
  ...javascriptRules,
  '@typescript-eslint/comma-dangle': [
    'error',
    {
      arrays: 'always-multiline',
      objects: 'always-multiline',
      imports: 'always-multiline',
      exports: 'always-multiline',
      functions: 'never',
    },
  ],
  'import/prefer-default-export': 0,
  'no-unused-vars': 'off',
  '@typescript-eslint/no-unused-vars': [ 'error', {
    vars: 'all',
    args: 'all',
    argsIgnorePattern: '^_',
    ignoreRestSiblings: false,
  } ],
  '@typescript-eslint/semi': [ 'error', 'never' ],
  '@typescript-eslint/space-before-function-paren': [ 'error', 'always' ],
  '@typescript-eslint/no-use-before-define': [ 'error' ],
  '@typescript-eslint/member-delimiter-style': [
    'error', {
      multiline: {
        delimiter: 'none',
      },
      singleline: {
        delimiter: 'comma',
        requireLast: false,
      },
      multilineDetection: 'brackets',
    } ],
  '@typescript-eslint/naming-convention': [
    'error',
    {
      selector: 'interface',
      format: [ 'PascalCase' ],
      custom: {
        regex: '^I[A-Z]',
        match: false,
      },
    },
  ],
}

module.exports = {
  overrides: [
    {
      files: [ '*.js', '*.jsx', '*.mjs', '*.cjs' ],
      extends: 'airbnb',
      plugins: [ 'mocha', 'react' ],
      rules: javascriptRules,
      env: {
        mocha: true,
        browser: true,
      },
      parserOptions: {
        ecmaVersion: 2021,
        ecmaFeatures: {
          jsx: true,
          modules: true,
        },
      },
    },
    {
      files: [ '*.ts', '*.tsx' ],
      extends: [ 'airbnb', 'airbnb-typescript' ],
      plugins: [ '@typescript-eslint' ],
      parser: '@typescript-eslint/parser',
      parserOptions: {
        project: './tsconfig.json',
        sourceType: 'module',
        ecmaFeatures: {
          jsx: true,
        },
      },
      rules: typescriptRules,
    },
    {
      files: [ '*-stories.*' ],
      rules: {
        'no-console': 'off',
      },
    },
    {
      files: [ 'demo/**/*.*', 'sandbox/**/*.*' ],
      rules: {
        'no-console': 'off',
      },
    },
    {
      files: [ 'features/step_definitions/*.*', 'test/**/*.*' ],
      rules: {
        'prefer-arrow-callback': 'off',
      },
    },
  ],
}
