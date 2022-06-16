import React, { forwardRef } from 'react'
import { Tag as ChakraTag, TagProps } from '@chakra-ui/react'
import { color } from '~/tokens'

interface Props extends TagProps {
  bgColor?: string
  variant?: 'default'
}

export const Tag = forwardRef(({
  children,
  variant = 'default',
  bgColor = color.text.default,
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
