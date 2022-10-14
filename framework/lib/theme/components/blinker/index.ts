import { ComponentSingleStyleConfig, keyframes } from '@chakra-ui/react'
import { palette, sizing } from '@mediatool/tokens'

const pulseRing = keyframes`
0% {
  transform: scale(0.33);
}
30% {
  transform: scale(0.66);
},
40%,
50% {
  opacity: 0;
}
100% {
  opacity: 0;
}
`

export const Blinker: ComponentSingleStyleConfig = {
  baseStyle: ({ color }) => ({
    position: 'relative',
    borderRadius: '50%',
    bgColor: color === '' ? palette.blue['500'] : color,
    _before: {
      content: "''",
      position: 'absolute',
      display: 'block',
      width: '300%',
      height: '300%',
      marginLeft: '-100%',
      marginTop: '-100%',
      borderRadius: '50%',
      bgColor: color,
      animation: `2.25s ${pulseRing} cubic-bezier(0.455, 0.03, 0.515, 0.955) -0.4s infinite`,
    },
  }),
  sizes: {
    '2xs': {
      height: sizing.blinker['2xs'],
      width: sizing.blinker['2xs'],
    },
    xs: {
      height: sizing.blinker.xs,
      width: sizing.blinker.xs,
    },
    sm: {
      height: sizing.blinker.sm,
      width: sizing.blinker.sm,
    },
    md: {
      height: sizing.blinker.md,
      width: sizing.blinker.md,
    },
    lg: {
      height: sizing.blinker.lg,
      width: sizing.blinker.lg,
    },
  },
  defaultProps: {
    size: 'md',
    color: palette.blue['500'],
  },
}
