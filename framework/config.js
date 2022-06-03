module.exports = {
  source: [ 'figma/**/*.json' ],
  platforms: {
    web: {
      transformGroup: 'web',
      buildPath: 'tokens/',
      files: [ {
        format: 'json/nested',
        destination: 'colors.json',
        filter: 'takeColors',
      },
      {
        format: 'json/nested',
        destination: 'palette.json',
        filter: 'takePalette',
      } ],
    },
  },
}
