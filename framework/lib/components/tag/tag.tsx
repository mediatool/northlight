import React, { forwardRef } from 'react'
import { Tag as ChakraTag, TagProps } from '@chakra-ui/react'

interface Props extends TagProps {
  bgColor?: string
  variant?: 'default' | 'subtle'
}

export const Tag = forwardRef(({
  children,
  variant = 'default',
  bgColor,
  ...rest
}: Props, ref: any) => (
  <ChakraTag
    bgColor={ bgColor }
    ref={ ref }
    variant={ variant }
    { ...rest }
  >
    { children }
  </ChakraTag>
))
