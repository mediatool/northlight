module.exports = {
  source: [ 'figma/**/*.json' ],
  platforms: {
    web: {
      transformGroup: 'mediatoolTokens',
      buildPath: 'tokens/',
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
