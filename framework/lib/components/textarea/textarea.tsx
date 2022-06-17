import React, { forwardRef } from 'react'
import { Textarea as ChakraTextarea, TextareaProps } from '@chakra-ui/react'
import { TextSizeProps } from '~/lib/types'

interface Props extends TextareaProps {
  size?: TextSizeProps
}

export const Textarea = forwardRef(({
  size = 'md',
  ...rest
}: Props, ref: any) => (
  <ChakraTextarea { ...rest } size={ size } ref={ ref } />
))
