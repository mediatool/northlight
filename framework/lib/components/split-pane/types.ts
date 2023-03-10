import { GridProps } from '@chakra-ui/react'
import { ReactElement } from 'react'

export interface SplitPaneProps extends GridProps {
  isOpen: boolean
  children: ReactElement[]
  initialSplit?: number
  minLeftWidth?: number
  minRightWidth?: number
}
