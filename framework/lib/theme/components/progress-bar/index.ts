import { ComponentSingleStyleConfig } from '@chakra-ui/react'

export const Progress: ComponentSingleStyleConfig = {
  baseStyle: ({ theme: { colors: color } }) => ({
    track: {
      bg: color['subdued-alt'],
    },
    filledTrack: {
      bg: color.brand,
    },
  }),
}
