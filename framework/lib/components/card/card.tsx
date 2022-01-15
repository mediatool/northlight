import React from 'react'
import { Box, BoxProps } from '@chakra-ui/react'
import { CardSize } from './types'

export interface CardProps extends BoxProps {
  size?: CardSize
}

export const Card = ({
  size = 'sm',
  shadow = 'lg',
  rounded = 6,
  ...rest
}: CardProps) => (
  <Box
    { ...rest }
    rounded={ rounded }
    shadow={ shadow }
    overflow="hidden"
    w={ (rest.w || rest.width) ?? size }
  />
)
