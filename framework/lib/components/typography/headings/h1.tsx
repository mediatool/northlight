import React from 'react'
import { Heading, useStyleConfig } from '@chakra-ui/react'
import { HeadingProps } from './types'

export const H1 = ({
  children,
  sx = {},
  ...rest
}: HeadingProps) => {
  const styles = useStyleConfig('H1', { sx })

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
