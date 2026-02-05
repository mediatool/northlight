module.exports = {
  extends: '@mediatool/eslint-config-mediatool',
  overrides: [
    {
      files: ['sandbox/**/*'],
      rules: {
        'import/no-extraneous-dependencies': ['error', { packageDir: __dirname }],
      },
    },
  ],
}
