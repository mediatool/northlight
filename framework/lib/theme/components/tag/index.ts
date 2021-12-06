import {
  ComponentSingleStyleConfig,
} from '@chakra-ui/react'

export const Tag: ComponentSingleStyleConfig = {
  baseStyle: {
    container: {
      fontWeight: 'semibold',
      color: 'white',
    },
  },
  sizes: {
    sm: {
      container: {
        borderRadius: 2,
      },
    },
    md: {
      container: {
        borderRadius: 2,
      },
    },
    lg: {
      container: {
        borderRadius: 2,
      },
    },
  },
  defaultProps: {
    colorScheme: 'mediatoolBlue',
    variant: 'solid',
    size: 'md',
  },
}
