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
