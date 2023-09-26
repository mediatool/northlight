import React from 'react'
import { Heading, useStyleConfig } from '@chakra-ui/react'
import { HeadingProps } from './types.ts'

/**
 * @see {@link https://northlight.dev/reference/h5}
 * @example (Example)
 * (?
 * <H5>Heading 5</H5>
 * ?)
 */
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
