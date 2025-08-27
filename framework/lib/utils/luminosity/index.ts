export const luminosity = (hexcolor: string) => {
  if (!hexcolor || typeof hexcolor !== 'string') return Number.NaN

  let color = hexcolor.trim()

  if (!/^#?[0-9a-f]{3}([0-9a-f]{3})?$/i.test(color)) {
    return Number.NaN
  }

  if (color[0] === '#') color = color.slice(1)
  if (color.length === 3) {
    color = color.split('').map((h) => h + h).join('')
  }

  const r = parseInt(color.substring(0, 2), 16)
  const g = parseInt(color.substring(2, 4), 16)
  const b = parseInt(color.substring(4, 6), 16)

  const brightness = (r * 299 + g * 587 + b * 114) / 1000
  return brightness
}
