import React from 'react'
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
export const P = ({
  children,
  variant = '16',
  sx = {},
  ...rest
}: PProps) => {
  const styles = useStyleConfig('P', { variant, sx })

  return (
    <ChakraText
      variant={ variant }
      sx={ styles }
      { ...rest }
    >
      { children }
    </ChakraText>
  )
}
