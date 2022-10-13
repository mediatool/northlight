import React from 'react'
import { useStyleConfig } from '@chakra-ui/react'
import { palette } from '@mediatool/tokens'
import { Box } from '../box'
import { BlinkerProps } from './types'

export const Blinker = ({
  color = palette.blue['500'],
  size = 'md',
  ...rest
}: BlinkerProps) => {
  const styles = useStyleConfig('Blinker', { color, size })
  return (
    <Box sx={ styles } data-testid="blinker-test-id" { ...rest } />
  )
}
