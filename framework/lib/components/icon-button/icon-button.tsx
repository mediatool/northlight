import React, { forwardRef } from 'react'
import { IconButton as ChakraIconButton, IconButtonProps } from '@chakra-ui/react'
import { ButtonVariants } from '../../../lib/types'

interface Props extends IconButtonProps {
  variant?: ButtonVariants
}

export const IconButton = forwardRef(({
  variant = 'default',
  icon,
  'aria-label': ariaLabel,
  ...rest
}: Props, ref: any) => (
  <ChakraIconButton
    variant={ variant }
    icon={ icon }
    aria-label={ ariaLabel }
    ref={ ref }
    { ...rest }
  />
))
