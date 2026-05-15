import { HTMLAttributes, ReactNode } from 'react'
import { DateValue } from '@internationalized/date'
import { AriaDateFieldProps } from '@react-aria/datepicker'
import { DateFieldState, DateSegment } from '@react-stately/datepicker'
import { AriaButtonProps } from '@react-aria/button'

export type DateSegmentType = DateSegment
export interface DateFieldProps extends AriaDateFieldProps<DateValue> {
  dateFormat?: string
  size?: 'sm' | 'md' | 'lg'
}

export interface DateSegmentProps {
  segment: DateSegment
  state: DateFieldState
  size?: 'sm' | 'md' | 'lg'
}

export interface StyledFieldProps extends HTMLAttributes<HTMLElement> {
  isInvalid?: boolean
  isDisabled?: boolean
  children: ReactNode
  variant?: 'outline' | 'filled'
  size?: 'sm' | 'md' | 'lg'
}

export interface TriggerProps extends AriaButtonProps {
  handleClick: () => void
  size?: 'sm' | 'md' | 'lg'
}
