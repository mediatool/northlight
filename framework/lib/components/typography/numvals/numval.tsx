import React, { forwardRef } from 'react'
import {
  Text as ChakraText,
  TextProps,
  useStyleConfig,
} from '@chakra-ui/react'

/**
 * @see {@link https://northlight.dev/reference/label }
 *
 * @example
 * (?
 * <NumVal sx={{color: 'brand' }} size="lg">270 000 000</NumVal>
 * ?)
 * (_Note, all other css properties not listed
 *
 */
export const NumVal = forwardRef<HTMLLabelElement, TextProps>(
  ({ children, size = 'sm', sx = {}, ...rest }, ref) => {
    const styles = useStyleConfig('NumVal', { sx, size })

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
  }
)
