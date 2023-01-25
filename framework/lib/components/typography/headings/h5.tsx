import React from 'react'
import { Heading, useStyleConfig } from '@chakra-ui/react'
import { HeadingProps } from './types'

export const H5 = ({
  children,
  sx = {},
  ...rest
}: HeadingProps) => {
  const styles = useStyleConfig('H5', { sx })

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
