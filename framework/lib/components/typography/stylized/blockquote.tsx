import React from 'react'
import { Text as ChakraText, TextProps, useStyleConfig } from '@chakra-ui/react'

/**
 * One of the stylized typography components
 * @see Capitalized
 * @see Lead
 * @see Small
 * @see Tiny
 * @see {@link https://northlight.dev/reference/blockquote }
 *
 * @example (Example)
 * (?
 * <Blockquote sx={{color: 'green.500' }}>Success</Blockquote>
 * ?)
 * (_Note, all other css properties not listed under the
 * props tab to right should be passed down via **sx**_)
 *
 *
 *
 */
export const Blockquote = ({ children, sx = {}, ...rest }: TextProps) => {
  const styles = useStyleConfig('Blockquote', { sx })

  return (
    <ChakraText as="span" sx={ styles } { ...rest }>
      { children }
    </ChakraText>
  )
}
