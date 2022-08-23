module.exports = {
  source: [ 'dist/sets/*.json' ],
  platforms: {
    web: {
      transformGroup: 'mediatoolTokens',
      buildPath: 'dist/',
      files: [ {
        format: 'json/nested',
        destination: 'global.json',
        filter: 'takeGlobalTokens',
      }, {
        format: 'json/nested',
        destination: 'theme.json',
        filter: 'takeTheme',
      } ],
    },
  },
}
