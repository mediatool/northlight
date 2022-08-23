const StyleDictionary = require('style-dictionary').extend('config.js')

function isGlobalToken (token) {
  return token.filePath === 'dist/sets/global.json'
}

function isTheme (token) {
  return token.filePath === 'dist/sets/theme.json'
}

function isBorderWidth (token) {
  return token.attributes.category === 'borderWidth'
}

function isSpacing (token) {
  return token.attributes.category === 'spacing'
}

function isFontSize (token) {
  return token.attributes.category === 'fontSize'
}

function convertToRem (token) {
  const val = parseFloat(token.original.value) / 16
  return `${val}rem`
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
  transformer: convertToRem,
})

StyleDictionary.registerTransform({
  name: 'spacing/rem',
  type: 'value',
  matcher: isSpacing,
  transformer: convertToRem,
})

StyleDictionary.registerTransform({
  name: 'fontSize/rem',
  type: 'value',
  matcher: isFontSize,
  transformer: convertToRem,
})

StyleDictionary.registerTransformGroup({
  name: 'mediatoolTokens',
  transforms: [
    'attribute/cti',
    'name/cti/kebab',
    'color/css',
    'borderWidth/rem',
    'spacing/rem',
    'fontSize/rem',
  ],
})

StyleDictionary.buildPlatform('web')
