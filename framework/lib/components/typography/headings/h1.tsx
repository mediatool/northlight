import React from 'react'
import { Heading, HeadingProps, useMultiStyleConfig } from '@chakra-ui/react'

export const H1 = ({ children, ...rest }: HeadingProps) => {
  const styles = useMultiStyleConfig('H1')
  return (
    <Heading
      as="h1"
      sx={ styles }
      { ...rest }
    >
      { children }
    </Heading>
  )
}
