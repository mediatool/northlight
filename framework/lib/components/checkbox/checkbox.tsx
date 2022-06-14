import React, { forwardRef } from 'react'
import { Checkbox as ChakraCheckbox, CheckboxProps } from '@chakra-ui/react'
import { CheckboxVariants } from '~/lib/types'

interface Props extends CheckboxProps {
  variant?: CheckboxVariants
}

export const Switch = forwardRef(({
  variant = 'default',
  ...rest
}: CheckboxProps, ref: any) => (
  <ChakraCheckbox { ...rest } ref={ ref } variant={ variant } />
))
