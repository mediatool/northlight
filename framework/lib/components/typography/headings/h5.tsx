import React from 'react'
import { Heading, HeadingProps, useStyleConfig } from '@chakra-ui/react'

export const H5 = ({ children, ...rest }: HeadingProps) => {
  const styles = useStyleConfig('H5')
  return (
    <Heading
      as="h5"
      sx={ styles }
      { ...rest }
    >
      { children }
    </Heading>
  )
}
