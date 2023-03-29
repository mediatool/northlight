import React from 'react'
import { AvatarProps as ChakraAvatarProps } from '@chakra-ui/react'

export interface AvatarProps extends ChakraAvatarProps {
  name?: string
  image?: string
  notificationCount?: number
  size?: '2xs' | 'xs' | 'sm' | 'md' | 'lg'
  variant?: 'square' | 'rounded'
}
export interface AvatarBadgeProps {
  notificationCount?: number
}

export interface AvatarGroupProps {
  max: number
  spacing?: number | string
  children: JSX.Element[] | React.ReactNode[]
}
