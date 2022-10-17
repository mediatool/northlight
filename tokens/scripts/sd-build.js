const StyleDictionary = require('style-dictionary').extend('config.js')

const isPath = (token, path) => token.filePath === path

const convertToRem = (value) => `${parseFloat(value) / 16}rem`

StyleDictionary.registerFilter({
  name: 'takeGlobalTokens',
  matcher: (token) => isPath(token, 'dist/sets/global.json'),
})

StyleDictionary.registerFilter({
  name: 'takeTheme',
  matcher: (token) => isPath(token, 'dist/sets/theme.json'),
})

StyleDictionary.registerTransform({
  name: 'borderWidth/rem',
  type: 'value',
  matcher: (token) => token.attributes.category === 'borderWidth',
  transformer: (token) => convertToRem(token.original.value),
})

StyleDictionary.registerTransform({
  name: 'spacing/rem',
  type: 'value',
  matcher: (token) => token.attributes.category === 'spacing',
  transformer: (token) => convertToRem(token.original.value),
})

StyleDictionary.registerTransform({
  name: 'sizing/rem',
  type: 'value',
  matcher: (token) => token.attributes.category === 'sizing',
  transformer: (token) => convertToRem(token.original.value),
})

StyleDictionary.registerTransform({
  name: 'fontSize/rem',
  type: 'value',
  transitive: true,
  matcher: (token) => token.attributes.category === 'fontSize',
  transformer: (token) => convertToRem(token.value),
})

StyleDictionary.registerTransform({
  name: 'lineHeight/rem',
  type: 'value',
  matcher: (token) => token.attributes.category === 'lineHeights',
  transformer: ({ value }) => (typeof value === 'string'
    ? value
    : convertToRem(value)
  ),
})

StyleDictionary.registerTransformGroup({
  name: 'mediatoolTokens',
  transforms: [
    'attribute/cti',
    'name/cti/kebab',
    'lineHeight/rem',
    'fontSize/rem',
    'color/css',
    'borderWidth/rem',
    'spacing/rem',
    'sizing/rem',
  ],
})

StyleDictionary.buildPlatform('web')
