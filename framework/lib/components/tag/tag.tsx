import React, { forwardRef } from 'react'
import { Tag as ChakraTag, TagProps } from '@chakra-ui/react'

interface Props extends TagProps {
  bgColor?: string
  variant?: 'solid' | 'subtle'
}

export const Tag = forwardRef(({
  children,
  variant = 'solid',
  bgColor,
  colorScheme,
  ...rest
}: Props, ref: any) => (
  <ChakraTag
    bgColor={ bgColor }
    colorScheme={ colorScheme }
    ref={ ref }
    variant={ variant }
    { ...rest }
  >
    { children }
  </ChakraTag>
))
