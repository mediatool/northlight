import React, { cloneElement, forwardRef } from 'react'
import { IconButton as ChakraIconButton, IconButtonProps } from '@chakra-ui/react'
import { ButtonVariants } from '../../types'

interface Props extends IconButtonProps {
  variant?: ButtonVariants
}

export const IconButton = forwardRef(({
  variant = 'default',
  icon,
  'aria-label': ariaLabel,
  children,
  ...rest
}: Props, ref: any) => {
  const IconComponent = icon ?? children as JSX.Element
  const IconWithSize = cloneElement(IconComponent, { size: rest.size })
  return (
    <ChakraIconButton
      variant={ variant }
      icon={ IconWithSize }
      aria-label={ ariaLabel }
      ref={ ref }
      { ...rest }
    />
  )
})
