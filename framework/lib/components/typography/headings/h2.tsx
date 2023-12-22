import React, { forwardRef } from 'react'
import { Heading, useStyleConfig } from '@chakra-ui/react'
import { HeadingProps } from './types'

/**
 * @see {@link https://northlight.dev/reference/h2}
 * @example (Example)
 * (?
 * <H2>Heading 2</H2>
 * ?)
 *
 */
export const H2 = forwardRef<HTMLHeadingElement, HeadingProps>(({
  children,
  sx = {},
  ...rest
}, ref) => {
  const styles = useStyleConfig('H2', { sx })

  return (
    <Heading
      as="h2"
      sx={ styles }
      ref={ ref }
      { ...rest }
    >
      { children }
    </Heading>
  )
})
