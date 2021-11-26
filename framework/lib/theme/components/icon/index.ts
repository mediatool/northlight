import { ComponentSingleStyleConfig } from '@chakra-ui/react'

export const Icon: ComponentSingleStyleConfig = {
  baseStyle: ({ theme }) => ({
    color: theme.colors.mediatoolBlue[500],
    boxSize: theme.sizes[6],
  }),
}
