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
        destination: 'webapp-components.json',
        filter: 'takeWebappComponents',
      }, {
        format: 'json/nested',
        destination: 'webapp.json',
        filter: 'takeWebapp',
      } ],
    },
  },
}
