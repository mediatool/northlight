import React from 'react'
import { Heading, HeadingProps, useMultiStyleConfig } from '@chakra-ui/react'

export const H3 = ({ children, ...rest }: HeadingProps) => {
  const styles = useMultiStyleConfig('H3')
  return (
    <Heading
      as="h3"
      sx={ styles }
      { ...rest }
    >
      { children }
    </Heading>
  )
}
