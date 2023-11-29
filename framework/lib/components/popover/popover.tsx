import { Popover as ChakraPopover, PopoverProps } from '@chakra-ui/react'

export const Popover = (props: PopoverProps) => (
  <ChakraPopover isLazy={ true } { ...props } />
)
