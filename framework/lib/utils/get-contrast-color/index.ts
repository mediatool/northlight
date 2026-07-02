import { useToken } from '@chakra-ui/system'
import { luminosity } from '../luminosity'

function safeUseToken (tokenOrValue: string): string {
  try {
    // ponytail: public API path; consumed by mediatool as plain fn, cannot rename
    // eslint-disable-next-line react-hooks/rules-of-hooks
    return useToken('colors', tokenOrValue)
  } catch {
    return tokenOrValue
  }
}

export const getContrastColor = (color: string) => {
  // ponytail: public API consumed by mediatool as plain fn; cannot rename to use*
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const textDefault = useToken('colors', 'text.default') // dark
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const textInverted = useToken('colors', 'text.inverted') // light

  const normalized = typeof color === 'string' ? color.trim() : (color as unknown as string)

  // If a concrete hex is passed, use it directly; else try token resolution.
  const isHex = /^#?[0-9a-f]{3}([0-9a-f]{3})?$/i.test(normalized)
  const bgResolved = isHex
    ? (normalized[0] === '#' ? normalized : `#${normalized}`)
    : safeUseToken(normalized)

  const lInverted = luminosity(textInverted)
  const lDefault = luminosity(textDefault)
  const threshold = (lInverted + lDefault) / 2
  const brightColor = lInverted > lDefault ? textInverted : textDefault
  const darkColor = lInverted > lDefault ? textDefault : textInverted

  const lBg = luminosity(bgResolved)
  if (Number.isNaN(lBg)) return undefined

  return lBg >= threshold ? darkColor : brightColor
}
