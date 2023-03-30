import React from 'react'
import { Heading, useStyleConfig } from '@chakra-ui/react'
import { HeadingProps } from './types'

/**
 * @see {@link https://northlight.dev/reference/h3}
 * @example (Example)
 * (?
 * <H3>Heading 3</H3>
 * ?)
 */
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
