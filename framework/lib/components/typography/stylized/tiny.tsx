import React from 'react'
import { Text as ChakraText, TextProps, useStyleConfig } from '@chakra-ui/react'

/**
 * One of the stylized typography components
 * @see Capitalized
 * @see Lead
 * @see Blockquote
 * @see Small
 * @see {@link https://northlight.dev/reference/tiny }
 *
 * @example (Example)
 * (?
 * <Tiny>Tiny</Tiny>
 * ?)
 * (_Note, all other css properties not listed under the
 * props tab to right should be passed down via **sx**_)
 *
 */
export const Tiny = ({
  children,
  sx = {},
  ...rest
}: TextProps) => {
  const styles = useStyleConfig('Tiny', { sx })

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
