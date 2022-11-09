import React from 'react'
import { Heading, HeadingProps, useStyleConfig } from '@chakra-ui/react'

export const H6 = ({ children, ...rest }: HeadingProps) => {
  const styles = useStyleConfig('H6')
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
