import { ComponentMultiStyleConfig } from '@chakra-ui/react'

export const Tag: ComponentMultiStyleConfig = {
  parts: [ 'container' ],
  baseStyle: {
    container: {
      fontWeight: 'semibold',
    },
  },
  sizes: {
    sm: {
      container: {
        borderRadius: 'tag.default',
      },
    },
    md: {
      container: {
        borderRadius: 'tag.default',
      },
    },
    lg: {
      container: {
        borderRadius: 'tag.default',
      },
    },
  },
  variants: {
    solid: ({ theme: { colors }, colorScheme }) => ({
      container: {
        bgColor: colors[colorScheme] && colors[colorScheme][500]
          ? colors[colorScheme][500] : colorScheme,
        color: colorScheme === 'yellow' ? 'mono.black' : 'mono.white',
      },
    }),
    subtle: ({ theme: { colors }, colorScheme }) => ({
      container: {
        bgColor: colors[colorScheme] && colors[colorScheme][100]
          ? colors[colorScheme][100] : colorScheme,
        color: 'mono.black',
      },
    }),
    ai: {
      container: {
        bgColor: 'bg.ai.default',
        color: 'text.inverted',
      },
    },
  },
  defaultProps: {
    size: 'md',
    colorScheme: 'background.tag.default',
  },
}
