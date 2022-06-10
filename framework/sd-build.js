const StyleDictionary = require('style-dictionary').extend('config.js')

function isGlobalToken (token) {
  return token.filePath === 'figma/global.json'
}

function isTheme (token) {
  return token.filePath === 'figma/theme.json'
}

StyleDictionary.registerFilter({
  name: 'takeGlobalTokens',
  matcher: isGlobalToken,
})

StyleDictionary.registerFilter({
  name: 'takeTheme',
  matcher: isTheme,
})

StyleDictionary.buildPlatform('web')
