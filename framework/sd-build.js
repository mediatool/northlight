const StyleDictionary = require('style-dictionary').extend('config.js')

function isColor (token) {
  return token.type === 'color'
}

function isPalette (token) {
  return token.type === 'palette'
}

StyleDictionary.registerFilter({
  name: 'takeColors',
  matcher: isColor,
})

StyleDictionary.registerFilter({
  name: 'takePalette',
  matcher: isPalette,
})

StyleDictionary.buildAllPlatforms()
