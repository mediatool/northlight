import React from 'react'
import { Text as ChakraText, TextProps, useMultiStyleConfig } from '@chakra-ui/react'

export const Small = ({
  children,
  sx,
  ...rest
}: TextProps) => {
  const styles = useMultiStyleConfig('Small', { sx })

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
