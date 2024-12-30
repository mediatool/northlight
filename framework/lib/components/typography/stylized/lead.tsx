import React, { forwardRef } from 'react'
import { Text as ChakraText, TextProps, useStyleConfig } from '@chakra-ui/react'

/**
 * One of the stylized typography components
 * @see Blockquote
 * @see Lead
 * @see Small
 * @see Tiny
 * @see {@link https://northlight.dev/reference/lead }
 *
 * @example
 * (?
 * <Lead>Lead</Lead>
 * ?)
 * (_Note, all other css properties not listed
 * under the props tab to right should be passed down via **sx**_)
 *
 */
export const Lead = forwardRef<HTMLParagraphElement, TextProps>(({
  children,
  sx = {},
  ...rest
}, ref) => {
  const styles = useStyleConfig('Lead', { sx })

  return (
    <ChakraText
      as="span"
      sx={ styles }
      ref={ ref }
      { ...rest }
    >
      { children }
    </ChakraText>
  )
})
