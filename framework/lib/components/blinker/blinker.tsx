import React from 'react'
import { useStyleConfig } from '@chakra-ui/react'
import { Box } from '../box'
import { BlinkerProps } from './types'

export const Blinker = ({
  color,
  size,
  ...rest
}: BlinkerProps) => {
  const styles = useStyleConfig('Blinker', { color, size })
  return (
    <Box sx={ styles } data-testid="blinker-test-id" { ...rest } />
  )
}
