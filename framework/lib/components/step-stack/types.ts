import { ReactNode } from 'react'
import { StackProps } from '@chakra-ui/react'

export interface StepStackProps extends StackProps {
  children: ReactNode | ReactNode[]
  rowHeight?: string
  /** The vertical alignment of the circles.
   * Accepts any values that can be used with the alignItems CSS property.
   * Defaults to "center".
  */
  stepCircleAlignment?: string
  /** Margin top for circles in pixels.
   * Useful for nonsymmetrical layouts.
   * Defaults to 0.
  */
  stepCircleMarginTopPx?: number
}
