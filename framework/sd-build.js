const StyleDictionary = require('style-dictionary').extend('config.js')

function isGlobalToken (token) {
  return token.filePath === 'figma/global.json'
}

function isTheme (token) {
  return token.filePath === 'figma/theme.json'
}

function isBorderWidth (token) {
  return token.attributes.category === 'borderWidth'
}

StyleDictionary.registerFilter({
  name: 'takeGlobalTokens',
  matcher: isGlobalToken,
})

StyleDictionary.registerFilter({
  name: 'takeTheme',
  matcher: isTheme,
})

StyleDictionary.registerTransform({
  name: 'borderWidth/rem',
  type: 'value',
  matcher: isBorderWidth,
  transformer: (token) => {
    const val = parseFloat(token.original.value) / 16
    return `${val}rem`
  },
})

StyleDictionary.registerTransformGroup({
  name: 'mediatoolTokens',
  transforms: [ 'attribute/cti', 'name/cti/kebab', 'color/css', 'borderWidth/rem', 'size/rem' ],
})

StyleDictionary.buildPlatform('web')
