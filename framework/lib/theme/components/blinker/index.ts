import { ComponentSingleStyleConfig } from '@chakra-ui/react'
import { keyframes } from '@emotion/react'

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
  baseStyle: ({ theme: { colors: palette }, color, isBlinking }) => ({
    position: 'relative',
    borderRadius: '50%',
    bgColor: color === '' ? palette.blue['500'] : color,
    _before: isBlinking
      ? {
        content: "''",
        position: 'absolute',
        display: 'block',
        width: '300%',
        height: '300%',
        marginLeft: '-100%',
        marginTop: '-100%',
        borderRadius: '50%',
        bgColor: color === '' ? 'blue.500' : color,
        animation: `2.25s ${pulseRing} cubic-bezier(0.455, 0.03, 0.515, 0.955) -0.4s infinite`,
        zIndex: 'base',
      }
      : {},
  }),
  sizes: {
    '2xs': ({ theme: { sizes: sizing } }) => ({
      height: sizing.blinker['2xs'],
      width: sizing.blinker['2xs'],
    }),
    xs: ({ theme: { sizes: sizing } }) => ({
      height: sizing.blinker.xs,
      width: sizing.blinker.xs,
    }),
    sm: ({ theme: { sizes: sizing } }) => ({
      height: sizing.blinker.sm,
      width: sizing.blinker.sm,
    }),
    md: ({ theme: { sizes: sizing } }) => ({
      height: sizing.blinker.md,
      width: sizing.blinker.md,
    }),
    lg: ({ theme: { sizes: sizing } }) => ({
      height: sizing.blinker.lg,
      width: sizing.blinker.lg,
    }),
  },
  defaultProps: {
    size: 'md',
    color: 'blue.500',
  },
}
