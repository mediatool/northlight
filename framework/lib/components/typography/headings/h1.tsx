import React from 'react'
import { Heading, useStyleConfig } from '@chakra-ui/react'
import { HeadingProps } from './types'

/**
 * @see {@link https://northlight.dev/reference/h1}
 * @example (Example)
 * (?
 * <H1>Heading 1</H1>
 * ?)
 */
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
