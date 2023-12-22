import React, { forwardRef } from 'react'
import { Heading, useStyleConfig } from '@chakra-ui/react'
import { HeadingProps } from './types'

/**
 * @see {@link https://northlight.dev/reference/h4}
 * @example (Example)
 * (?
 * <H4>Heading 4</H4>
 * ?)
 */
export const H4 = forwardRef<HTMLHeadingElement, HeadingProps>(({
  children,
  sx = {},
  ...rest
}, ref) => {
  const styles = useStyleConfig('H4', { sx })

  return (
    <Heading
      as="h4"
      sx={ styles }
      ref={ ref }
      { ...rest }
    >
      { children }
    </Heading>
  )
})
