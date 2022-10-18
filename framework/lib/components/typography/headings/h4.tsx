import React from 'react'
import { Heading, HeadingProps, useMultiStyleConfig } from '@chakra-ui/react'

export const H4 = ({ children, ...rest }: HeadingProps) => {
  const styles = useMultiStyleConfig('H4')
  return (
    <Heading
      as="h4"
      sx={ styles }
      { ...rest }
    >
      { children }
    </Heading>
  )
}
