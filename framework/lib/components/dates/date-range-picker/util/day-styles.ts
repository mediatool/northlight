import { CSSObject } from '@chakra-ui/react'
import { palette } from '~lib/theme'
import { DayState } from '../types'

export const dayStateStyles: Record<DayState, CSSObject> = {
  BASE: {
    bg: palette.white,
    color: palette.gray[700],
    m: 0,
    border: 'none',
    position: 'relative',
    transition: 'background 400ms ease-in-out',
    _hover: {
      border: `2px solid ${palette.blue[500]}`,
      bg: palette.white,
    },
  },
  START_DATE: {
    bg: palette.blue[500],
    color: palette.white,
    borderRadius: 'full',
    position: 'relative',
    _before: {
      content: '""',
      bg: palette.gray[100],
      display: 'block',
      position: 'absolute',
      borderLeftRadius: 'full',
      zIndex: -1,
      boxSize: '100%',
    },
  },
  END_DATE: {
    bg: palette.blue[500],
    color: palette.white,
    borderRadius: 'full',
    position: 'relative',
    _before: {
      content: '""',
      bg: palette.gray[100],
      display: 'block',
      position: 'absolute',
      borderRightRadius: 'full',
      zIndex: -1,
      boxSize: '100%',
    },
  },
  FIRST_IN_MONTH: {
    bg: `linear-gradient(to left, ${palette.gray[100]}, ${palette.white})`,
    borderRadius: 'none',
    color: palette.gray[700],
  },
  LAST_IN_MONTH: {
    bg: `linear-gradient(to right, ${palette.gray[100]}, ${palette.white})`,
    borderRadius: 'none',
    color: palette.gray[700],
  },
  IN_RANGE: {
    bg: palette.gray[100],
    borderRadius: 'none',
    color: palette.gray[700],
  },
  TODAY: {
    color: palette.gray[700],
    transition: 'background 400ms ease-in-out',
    _hover: {
      border: `2px solid ${palette.blue[500]}`,
      bg: palette.white,
    },
  },
  UNAVAILABLE: {
    bg: palette.white,
    color: palette.gray[200],
    pointerEvents: 'none',
  },
}
