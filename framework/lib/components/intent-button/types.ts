import { StackProps } from '@chakra-ui/react'
import { ComponentType } from 'react'

export interface IntentButtonProps {
  icon?: ComponentType<any>
  timeout?: number
  onTimeout?: () => void
  tooltipText?: string
  'aria-label'?: string
}

export interface TimeoutProgressCircleProps extends StackProps {
  progress: number
}
