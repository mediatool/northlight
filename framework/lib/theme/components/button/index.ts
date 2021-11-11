import {
  ComponentSingleStyleConfig,
  theme,
} from '@chakra-ui/react'

export const Button: ComponentSingleStyleConfig = {
  baseStyle: {
    borderRadius: theme.radii.sm,
  },
  defaultProps: {
    colorScheme: 'blue',
    variant: 'solid',
    size: 'md',
  },
}
