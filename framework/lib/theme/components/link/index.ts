import {
  ComponentSingleStyleConfig,
} from '@chakra-ui/react'

export const Link: ComponentSingleStyleConfig = {
  baseStyle: ({ colorScheme }) => ({
    _focus: {
      ring: '2px',
      ringColor: `${colorScheme}.100`,
      ringOffset: '1px',
    },
  }),
  defaultProps: {
    colorScheme: 'mediatoolBlue',
  },
}
