import React from 'react'
import { Heading, HeadingProps, useMultiStyleConfig } from '@chakra-ui/react'

export const H6 = ({ children, ...rest }: HeadingProps) => {
  const styles = useMultiStyleConfig('H6')
  return (
    <Heading
      as="h6"
      sx={ styles }
      { ...rest }
    >
      { children }
    </Heading>
  )
}
