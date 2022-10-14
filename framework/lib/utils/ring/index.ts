import { color } from '@mediatool/tokens'
import { CSSObject } from '@emotion/react'

export const ring:CSSObject = {
  _focusVisible: {
    outline: 'none',
    ring: '2px',
    ringColor: color.border.wcag,
    ringOffset: '1px',
  },
}
