import React from 'react'
import { Heading, useStyleConfig } from '@chakra-ui/react'
import { HeadingProps } from './types'

export const H4 = ({
  children,
  sx = {},
  ...rest
}: HeadingProps) => {
  const styles = useStyleConfig('H4', { sx })

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
