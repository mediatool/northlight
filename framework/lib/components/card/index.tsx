import React from 'react'
import { Box, BoxProps } from '@chakra-ui/react'

type Props = BoxProps

export const Card = (props: Props) => (
  <Box
    rounded="base"
    shadow="base"
    overflow="hidden"
    { ...props }
  />
)
