import { IconButtonProps } from '@chakra-ui/react'
import { ButtonVariants } from '../button/types'

export interface NotificationIconButtonProps extends IconButtonProps {
  variant?: ButtonVariants
  blinkerColor?: string
  hasNotification?: boolean
}
