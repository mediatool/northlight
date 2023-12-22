import React, { forwardRef } from 'react'
import { Heading, useStyleConfig } from '@chakra-ui/react'
import { HeadingProps } from './types'

/**
 * @see {@link https://northlight.dev/reference/h3}
 * @example (Example)
 * (?
 * <H3>Heading 3</H3>
 * ?)
 */
export const H3 = forwardRef<HTMLHeadingElement, HeadingProps>(({
  children,
  sx = {},
  ...rest
}, ref) => {
  const styles = useStyleConfig('H3', { sx })

  return (
    <Heading
      as="h3"
      sx={ styles }
      ref={ ref }
      { ...rest }
    >
      { children }
    </Heading>
  )
})
