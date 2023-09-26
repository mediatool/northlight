import React from 'react'
import { Heading, useStyleConfig } from '@chakra-ui/react'
import { HeadingProps } from './types.ts'

/**
 * @see {@link https://northlight.dev/reference/h6}
 * @example (Example)
 * (?
 * <H6>Heading 6</H6>
 * ?)
 */
export const H6 = ({
  children,
  sx = {},
  ...rest
}: HeadingProps) => {
  const styles = useStyleConfig('H6', { sx })

  return (
    <Heading
      as="h6"
      sx={ styles }
      { ...rest }
    >
      { children }
    </Heading>
  )
}
