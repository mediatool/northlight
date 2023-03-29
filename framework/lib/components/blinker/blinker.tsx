import React from 'react'
import { useStyleConfig } from '@chakra-ui/react'
import { Box } from '../box'
import { BlinkerProps } from './types'

/**
 * Status indicator of some sorts
 * @see {@link https://northlight.dev/reference/blinker}
 *
 * @example (Example)
 * Example:
 * (?
 * <Box p="4">
  * <Blinker color="bg.brand.default" />
 * </Box>
 * ?)
 */
export const Blinker = ({
  color = '',
  size,
  isBlinking = true,
  ...rest
}: BlinkerProps) => {
  const styles = useStyleConfig('Blinker', { color, size, isBlinking })

  return <Box sx={ styles } data-testid="blinker-test-id" { ...rest } />
}
