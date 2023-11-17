export const isValidColor = (color: string): boolean => {
  const hex = /^#(?:[0-9a-fA-F]{6})(?:[0-9a-fA-F]{2})?$/
  const rgba =
    /^(rgb|hsl)a?\(\s*((\d{1,3}\s*,\s*){2}\d{1,3}|(\d{1,3}%\s*,\s*){2}\d{1,3}%)(\s*,\s*\d*\.?\d+%?)?\s*\)$/

  return hex.test(color) || rgba.test(color)
}

export const getTokenType = (
  value: string,
  category: string
): string | null => {
  if (isValidColor(value)) return 'color'
  switch (category) {
    case 'colors':
      return 'color'
    case 'shadows':
      return 'boxShadow'
    case 'radii':
      return 'borderRadius'
    case 'borderWidths':
      return 'borderWidths'
    case 'sizes':
      return 'sizes'
    case 'space':
      return 'space'
    case 'borders':
      return 'borders'
    case 'opacity':
      return 'opacity'
    case 'fontSizes':
      return 'fontSize'
    case 'fontWeights':
      return 'fontWeight'
    case 'lineHeights':
      return 'lineHeight'
    case 'fonts':
      return 'fontFamily'
    case 'letterSpacings':
      return 'letterSpacing'
    default:
      return null
  }
}
