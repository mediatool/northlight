import React, { cloneElement, forwardRef } from 'react'
import { IconButton as ChakraIconButton } from '@chakra-ui/react'
import { IconButtonProps } from './types'

export const IconButton = forwardRef(({
  variant = 'default',
  icon,
  'aria-label': ariaLabel,
  children,
  ...rest
}: IconButtonProps, ref: any) => {
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
