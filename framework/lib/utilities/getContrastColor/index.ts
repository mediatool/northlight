import { color as colorToken } from '~/tokens'

export function getContrastColor (hexcolor: string) {
  let color = hexcolor

  if (color.slice(0, 1) === '#') {
    color = color.slice(1)
  }

  if (color.length === 3) {
    color = color.split('').map((hex) => hex + hex).join('')
  }

  const r = parseInt(color.substr(0, 2), 16)
  const g = parseInt(color.substr(2, 2), 16)
  const b = parseInt(color.substr(4, 2), 16)

  const yiq = ((r * 299) + (g * 587) + (b * 114)) / 1000

  return (yiq >= 128) ? colorToken.text.default : colorToken.text.inverted
}
