import React from 'react'
import { Text as ChakraText, TextProps, useStyleConfig } from '@chakra-ui/react'

export const Blockquote = ({
  children,
  sx = {},
  ...rest
}: TextProps) => {
  const styles = useStyleConfig('Blockquote', { sx })

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
