import React from 'react'
import { AvatarProps as ChakraAvatarProps } from '@chakra-ui/react'

export interface AvatarProps extends ChakraAvatarProps {
  name?: string
  image?: string
  notificationCount?: number
  size?: 'sm' | 'md' | 'lg'
}
export interface AvatarBadgeProps {
  notificationCount?: number
}

export interface AvatarGroupProps {
  max: number
  spacing?: number | string
  children: JSX.Element[] | React.ReactNode[]
}
