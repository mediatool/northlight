import { ReactNode } from 'react'
import { StackProps } from '@chakra-ui/react'

export interface StepStackProps extends StackProps {
  children: ReactNode | ReactNode[]
  rowHeight?: string
}
