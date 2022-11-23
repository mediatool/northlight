import React, { forwardRef } from 'react'
import { Tag as ChakraTag } from '@chakra-ui/react'
import { TagProps } from './types'

export const Tag = forwardRef(({
  children,
  variant = 'solid',
  bgColor,
  colorScheme,
  ...rest
}: TagProps, ref: any) => (
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
