import React from 'react'
import { Text as ChakraText, TextProps, useStyleConfig } from '@chakra-ui/react'

export const Lead = ({
  children,
  sx = {},
  ...rest
}: TextProps) => {
  const styles = useStyleConfig('Lead', { sx })

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
