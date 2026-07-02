module.exports = {
  extends: [
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    '@mediatool/eslint-config-mediatool',
  ],
  settings: {
    react: {
      version: 'detect',
    },
  },
  overrides: [
    {
      files: ['sandbox/**/*'],
      rules: {
        'import/no-extraneous-dependencies': ['error', { packageDir: __dirname }],
      },
    },
  ],
}
