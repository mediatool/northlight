import { MenuProps as ChakraMenuProps } from '@chakra-ui/react'

export type MenuVariants = 'compact' | 'relaxed'

export interface MenuProps extends ChakraMenuProps {
  variant?: MenuVariants
}
