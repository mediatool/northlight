import React from 'react'
import { Heading, useStyleConfig } from '@chakra-ui/react'
import { HeadingProps } from './types'

export const H3 = ({
  children,
  sx = {},
  ...rest
}: HeadingProps) => {
  const styles = useStyleConfig('H3', { sx })

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
