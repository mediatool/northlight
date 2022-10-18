import React from 'react'
import { Text as ChakraText, useMultiStyleConfig } from '@chakra-ui/react'
import { PProps } from './types'

export const P = ({
  children,
  variant = '16',
  ...rest
}: PProps) => {
  const styles = useMultiStyleConfig('P', { variant })

  return (
    <ChakraText
      variant={ variant }
      sx={ styles }
      { ...rest }
    >
      { children }
    </ChakraText>
  )
}
