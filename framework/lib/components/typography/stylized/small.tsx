import React from 'react'
import { Text as ChakraText, TextProps, useStyleConfig } from '@chakra-ui/react'

/**
 * One of the stylized typography components
 * @see Capitalized
 * @see Lead
 * @see Blockquote
 * @see Tiny
 * @see {@link https://northlight.dev/reference/small }
 *
 * @example (Example)
 * (?
 * <Small>Small</Small>
 * ?)
 * (_Note, all other css properties not listed under the
 * props tab to right should be passed down via **sx**_)
 *
 *
 *
 */
export const Small = ({
  children,
  sx = {},
  ...rest
}: TextProps) => {
  const styles = useStyleConfig('Small', { sx })

  return (
    <ChakraText
      as="small"
      sx={ styles }
      { ...rest }
    >
      { children }
    </ChakraText>
  )
}
