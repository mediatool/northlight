import { StackProps } from '@chakra-ui/react'

export interface LoadingBarProps extends StackProps {
  loaded: number
  /** Whether to remove the progress bar from the DOM tree once finnished loading */
  hideDisplay?: boolean
  onLoadEnd?: () => void
}
