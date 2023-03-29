import React from 'react'
import { Text as ChakraText, TextProps, useStyleConfig } from '@chakra-ui/react'

/**
 * One of the stylized typography components
 * @see Blockquote
 * @see Lead
 * @see Small
 * @see Tiny
 * @see {@link https://northlight.dev/reference/capitalized }
 *
 * @example (Example)
 * Example:
 * (?
 * <Capitalized sx={{color: 'red.500' }}>Error</Capitalized>
 * ?)
 * (_Note, all other css properties not listed
 * under the props tab to right should be passed down via **sx**_)
 *
 */
export const Capitalized = ({
  children,
  sx = {},
  ...rest
}: TextProps) => {
  const styles = useStyleConfig('Capitalized', { sx })

  return (
    <ChakraText
      as="span"
      sx={ styles }
      { ...rest }
    >
      { children }
    </ChakraText>
  )
}
