import { CSSObject } from '@chakra-ui/react'
import { DayState } from '../types'
import { palette } from '../../../theme'

export const dayStyles: Record<DayState, CSSObject> = {
  BASE: {
    bg: palette.white,
    color: palette.gray[700],
    _hover: {
      border: `1px solid ${palette.blue[500]}`,
      bg: palette.white,
    },
  },
  TODAY_SELECTED: {
    bg: palette.blue[500],
    color: palette.white,
    _hover: {
      bg: palette.gray[100],
      color: palette.gray[700],
      border: `1px solid ${palette.blue[500]}`,
    },
  },
  SELECTED: {
    bg: palette.blue[500],
    color: palette.white,
    _hover: {
      bg: palette.blue[500],
    },
  },
  TODAY: {
    bg: palette.mediatoolBlue[500],
    color: palette.white,
    _hover: {
      bg: palette.blue[500],
    },
  },
  UNAVAILABLE: {
    bg: palette.white,
    color: palette.gray[300],
  },
}
