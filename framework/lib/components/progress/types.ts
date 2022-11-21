import { StackProps } from '@chakra-ui/react'

export interface ProgressBarProps extends StackProps {
  loaded: number
  hideDisplay?: boolean
}
