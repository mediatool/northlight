module.exports = {
  extends: '@mediatool/eslint-config-mediatool',
  parserOptions: {
    project: 'tsconfig.json',
    tsconfigRootDir: __dirname,
    sourceType: 'module',
  },
}
