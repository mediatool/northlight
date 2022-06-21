import React, { forwardRef } from 'react'
import { Select as ChakraSelect, SelectProps } from '@chakra-ui/react'
import { SelectSizes } from '~/lib/types'

interface Props extends SelectProps {
  size?: SelectSizes
}

export const Select = forwardRef(({
  size = 'md',
  ...rest
}: Props, ref: any) => (
  <ChakraSelect size={ size } ref={ ref } { ...rest } />
))
