module.exports = {
  extends: '@mediatool/eslint-config-mediatool',
  plugins: [ 'react-hooks' ],
  rules: {
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
  },
}
