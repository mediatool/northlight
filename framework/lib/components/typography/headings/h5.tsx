import React from 'react'
import { Heading, HeadingProps, useMultiStyleConfig } from '@chakra-ui/react'

export const H5 = ({ children, ...rest }: HeadingProps) => {
  const styles = useMultiStyleConfig('H5')
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
