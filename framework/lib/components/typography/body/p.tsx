import React from 'react'
import { Text as ChakraText, useStyleConfig } from '@chakra-ui/react'
import { PProps } from './types'

export const P = ({
  children,
  variant = '16',
  ...rest
}: PProps) => {
  const styles = useStyleConfig('P', { variant })

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
