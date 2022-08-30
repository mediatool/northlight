import React from 'react'
import {
  Avatar as ChakraAvatar,
} from '@chakra-ui/react'
import { AvatarProps } from '../../types'

export const Avatar = ({
  variant = 'square',
  ...rest
}: AvatarProps) => (
  <ChakraAvatar variant={ variant } { ...rest } />
)
