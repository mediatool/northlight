import React, { cloneElement, forwardRef } from 'react'
import { IconButton as ChakraIconButton } from '@chakra-ui/react'
import { IconButtonProps } from './types.ts'

/**
 * A normal button but renders an icon instead of text
 * @see Button
 * @see Icon
 * @see {@link https://northlight.dev/reference/icon-button}
 *
 * @example (Example)
 * (?
 * <IconButton variant='brand' icon={<Icon as={UsersDuo} />} onClick={console.log}/>
 * ?)
 *
 * @example (Example)
 * (?
        <IconButton
          isRound={ true }
          aria-label="create"
          variant="success"
          icon={ <Icon as={ PlusSolid } /> }
        />
 * ?)
 *
 */
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
