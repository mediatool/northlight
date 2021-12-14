import React from 'react'
import { Box, BoxProps } from '@chakra-ui/react'
import { CardSize } from './types'

export interface CardProps extends BoxProps {
  size?: CardSize
}

export const Card = ({
  size = 'xs',
  shadow = 'lg',
  ...rest
}: CardProps) => (
  <Box
    { ...rest }
    rounded={ 6 }
    shadow={ shadow }
    overflow="hidden"
    w={ size }
  />
)
