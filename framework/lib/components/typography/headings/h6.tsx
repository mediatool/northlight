import React, { forwardRef } from 'react'
import { Heading, useStyleConfig } from '@chakra-ui/react'
import { HeadingProps } from './types'

/**
 * @see {@link https://northlight.dev/reference/h6}
 * @example (Example)
 * (?
 * <H6>Heading 6</H6>
 * ?)
 */
export const H6 = forwardRef<HTMLHeadingElement, HeadingProps>(({
  children,
  sx = {},
  ...rest
}, ref) => {
  const styles = useStyleConfig('H6', { sx })

  return (
    <Heading
      as="h6"
      sx={ styles }
      ref={ ref }
      { ...rest }
    >
      { children }
    </Heading>
  )
})
