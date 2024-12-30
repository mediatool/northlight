import React, { forwardRef } from 'react'
import { Text as ChakraText, useStyleConfig } from '@chakra-ui/react'
import { PProps } from './types'

/**
 * @see {@link https://northlight.dev/reference/p}
 * @example
 * (?
 * <P>Body text</P>
 * ?)
 *
 */
export const P = forwardRef<HTMLParagraphElement, PProps>(({
  children,
  variant = '16',
  sx = {},
  ...rest
}, ref) => {
  const styles = useStyleConfig('P', { variant, sx })

  return (
    <ChakraText
      variant={ variant }
      sx={ styles }
      ref={ ref }
      { ...rest }
    >
      { children }
    </ChakraText>
  )
})
