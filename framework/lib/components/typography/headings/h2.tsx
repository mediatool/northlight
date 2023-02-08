import React from 'react'
import { Heading, useStyleConfig } from '@chakra-ui/react'
import { HeadingProps } from './types'

export const H2 = ({
  children,
  sx = {},
  ...rest
}: HeadingProps) => {
  const styles = useStyleConfig('H2', { sx })

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
