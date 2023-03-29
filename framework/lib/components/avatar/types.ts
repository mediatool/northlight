import React from 'react'
import { AvatarProps as ChakraAvatarProps } from '@chakra-ui/react'

export interface AvatarProps
  extends Omit<
  ChakraAvatarProps,
  | 'src'
  | 'srcSet'
  | 'getInitials'
  | 'onError'
  | 'loading'
  | 'icon'
  | 'referrerPolicy'
  | 'showBorder'
  | 'iconLabel'
  | 'ignoreFallback'
  > {
  name?: string
  image?: string
  /** This will render a badge in the corner of the avatar  */
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
