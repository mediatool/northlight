import React from 'react'
import { Heading, HeadingProps, useStyleConfig } from '@chakra-ui/react'

export const H4 = ({ children, ...rest }: HeadingProps) => {
  const styles = useStyleConfig('H4')
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
