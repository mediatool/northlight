import React, { forwardRef } from 'react'
import { Heading, useStyleConfig } from '@chakra-ui/react'
import { HeadingProps } from './types'

/**
 * @see {@link https://northlight.dev/reference/h5}
 * @example (Example)
 * (?
 * <H5>Heading 5</H5>
 * ?)
 */
export const H5 = forwardRef<HTMLHeadingElement, HeadingProps>(({
  children,
  sx = {},
  ...rest
}, ref) => {
  const styles = useStyleConfig('H5', { sx })

  return (
    <Heading
      as="h5"
      sx={ styles }
      ref={ ref }
      { ...rest }
    >
      { children }
    </Heading>
  )
})
