const { isArrayLike, map, join } = require('ramda')

const SD = require('style-dictionary')

const skins = [ 'webapp', 'tott' ]

const convertToRem = (value) => `${parseFloat(value) / 16}rem`

SD.registerTransform({
  name: 'borderWidth/rem',
  type: 'value',
  matcher: (token) => token.path.includes('borderWidth'),
  transformer: (token) => convertToRem(token.original.value),
})

SD.registerTransform({
  name: 'borderRadius/rem',
  type: 'value',
  matcher: (token) => token.path.includes('borderRadius'),
  transformer: ({ value }) => (value === 999 ? '999px' : convertToRem(value)),
})

SD.registerTransform({
  name: 'spacing/rem',
  type: 'value',
  matcher: (token) => token.attributes.category === 'spacing',
  transformer: (token) => convertToRem(token.original.value),
})

SD.registerTransform({
  name: 'sizing/rem',
  type: 'value',
  matcher: (token) => token.attributes.category === 'sizing',
  transformer: (token) => convertToRem(token.original.value),
})

SD.registerTransform({
  name: 'fontSize/rem',
  type: 'value',
  matcher: (token) => token.attributes.category === 'fontSize',
  transformer: (token) => convertToRem(token.value),
})

SD.registerTransform({
  name: 'lineHeight/rem',
  type: 'value',
  matcher: (token) => token.attributes.category === 'lineHeights',
  transformer: ({ value }) => (typeof value === 'string'
    ? value
    : convertToRem(value)
  ),
})

SD.registerTransform({
  name: 'boxShadow/px',
  type: 'value',
  matcher: (token) => token.path.includes('boxShadow'),
  transformer: (token) => {
    const shadow = isArrayLike(token.value) ? token.value : [ token.value ]
    const value = map((s) => {
      const { x, y, blur, color, spread, type } = s
      return `${type === 'innerShadow' ? 'inset ' : ''}${x}px ${y}px ${blur}px ${spread}px ${color}`
    }, shadow)

    return join(', ', value)
  },
})

SD.registerTransformGroup({
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

const getStyleDictionaryConfig = (skin) => ({
  source: [
    `dist/sets/${skin}/*.json`,
  ],
  platforms: {
    web: {
      transformGroup: 'mediatoolTokens',
      buildPath: `dist/${skin}/`,
      files: [ {
        format: 'json/nested',
        destination: 'global.json',
        filter: {
          filePath: `dist/sets/${skin}/global.json`,
        },
      }, {
        format: 'json/nested',
        destination: `${skin}.json`,
        filter: {
          filePath: `dist/sets/${skin}/${skin}.json`,
        },
      }, {
        format: 'json/nested',
        destination: `${skin}-components.json`,
        filter: {
          filePath: `dist/sets/${skin}/${skin}-components.json`,
        },
      } ],
    },
  },
})

skins.forEach((skin) => {
  const StyleDictionary = SD.extend(getStyleDictionaryConfig(skin))
  StyleDictionary.buildPlatform('web')
})
