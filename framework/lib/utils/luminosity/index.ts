export const luminosity = (hexcolor: string) => {
  let color = hexcolor

  if (color.slice(0, 1) === '#') {
    color = color.slice(1)
  }

  if (color.length === 3) {
    color = color
      .split('')
      .map((hex) => hex + hex)
      .join('')
  }

  const r = parseInt(color.substring(0, 2), 16)
  const g = parseInt(color.substring(2, 4), 16)
  const b = parseInt(color.substring(4, 6), 16)

  const brightness = (r * 299 + g * 587 + b * 114) / 1000
  return brightness
}
