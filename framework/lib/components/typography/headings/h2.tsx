import React from 'react'
import { Heading, HeadingProps, useMultiStyleConfig } from '@chakra-ui/react'

export const H2 = ({ children, ...rest }: HeadingProps) => {
  const styles = useMultiStyleConfig('H2')
  return (
    <Heading
      as="h2"
      sx={ styles }
      { ...rest }
    >
      { children }
    </Heading>
  )
}
