import { HTMLAttributes, ReactNode } from 'react'
import { DateValue } from '@internationalized/date'
import { AriaDateFieldProps } from '@react-aria/datepicker'
import { DateFieldState, DateSegment } from '@react-stately/datepicker'

export type DateSegmentType = DateSegment
export interface DateFieldProps extends AriaDateFieldProps<DateValue> {
  dateFormat?: string
}

export interface DateSegmentProps {
  segment: DateSegment
  state: DateFieldState
}

export interface StyledFieldProps extends HTMLAttributes<HTMLElement> {
  isInvalid?: boolean
  isDisabled?: boolean
  children: ReactNode
  variant?: 'outline' | 'filled'
}
export interface TriggerProps {
  id?: string
  'aria-haspopup'?: boolean | 'menu' | 'listbox' | 'tree' | 'grid' | 'dialog' | 'true' | 'false'
  'aria-label'?: string
  'aria-labelledby'?: string
  'aria-describedby'?: string
  'aria-expanded'?: boolean | 'true' | 'false'
  isDisabled?: boolean
  handleClick: () => void
}
