const { equals, isArrayLike, map, join } = require('ramda')

const StyleDictionary = require('style-dictionary').extend('config.js')

const convertToRem = (value) => `${parseFloat(value) / 16}rem`

StyleDictionary.registerFilter({
  name: 'takeGlobalTokens',
  matcher: ({ filePath }) => equals('dist/sets/global.json', filePath),
})

StyleDictionary.registerFilter({
  name: 'takeWebappComponents',
  matcher: ({ filePath }) => equals('dist/sets/webapp-components.json', filePath),
})

StyleDictionary.registerFilter({
  name: 'takeWebapp',
  matcher: ({ filePath }) => equals('dist/sets/webapp.json', filePath),
})

StyleDictionary.registerTransform({
  name: 'borderWidth/rem',
  type: 'value',
  matcher: (token) => token.attributes.category === 'borderWidth',
  transformer: (token) => convertToRem(token.original.value),
})

StyleDictionary.registerTransform({
  name: 'borderRadius/rem',
  type: 'value',
  matcher: (token) => token.attributes.category === 'borderRadius',
  transformer: ({ value }) => (value === 999 ? '999px' : convertToRem(value)),
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

StyleDictionary.registerTransform({
  name: 'boxShadow/px',
  type: 'value',
  matcher: (token) => token.attributes.category === 'boxShadow',
  transformer: (token) => {
    const shadow = isArrayLike(token.value) ? token.value : [ token.value ]
    const value = map((s) => {
      const { x, y, blur, color, spread, type } = s
      return `${type === 'innerShadow' ? 'inset ' : ''}${x}px ${y}px ${blur}px ${spread}px ${color}`
    }, shadow)

    return join(', ', value)
  },
})

StyleDictionary.registerTransformGroup({
  name: 'mediatoolTokens',
  transforms: [
    'attribute/cti',
    'name/cti/kebab',
    'borderRadius/rem',
    'lineHeight/rem',
    'fontSize/rem',
    'color/css',
    'borderWidth/rem',
    'spacing/rem',
    'sizing/rem',
    'boxShadow/px',
  ],
})

StyleDictionary.buildPlatform('web')
