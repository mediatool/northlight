import React from 'react'
import { Text as ChakraText, TextProps, useStyleConfig } from '@chakra-ui/react'

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
