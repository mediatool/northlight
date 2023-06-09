import React from 'react'
import { AvatarProps as ChakraAvatarProps, StackProps } from '@chakra-ui/react'

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
  tooltip?: boolean
  tooltipPlacement: 'auto-start' | 'auto' | 'auto-end' | 'top-start' | 'top' | 'top-end' | 'right-start' | 'right' | 'right-end' | 'bottom-start' | 'bottom' | 'bottom-end' | 'left-start' | 'left' | 'left-end'
}
export interface AvatarBadgeProps {
  notificationCount?: number
}

export interface AvatarGroupProps extends StackProps {
  max: number
  spacing?: number | string
  /** The children should be avatar components */
  children: JSX.Element[] | React.ReactNode[]
}
