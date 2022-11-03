import React, { ComponentType } from 'react'
import { StackDirection } from '@chakra-ui/react'
import { RegisterOptions } from 'react-hook-form'

type FlipButtonSize = 'xs' | 'sm' | 'md' | 'lg'
type FlipButtonVariant = 'default' | 'brand'

export interface FlipButtonProps {
  size?: FlipButtonSize
  variant?: FlipButtonVariant
  isMulti?: boolean
  isDisabled?: boolean
  icon?: ComponentType<any>
  children?: React.ReactNode
  value: string
}

export interface FlipButtonGroupProps extends Omit<FlipButtonProps, 'value'> {
  onChange?: (val: string | string[]) => void
  direction?: StackDirection
  children?: React.ReactNode[] | React.ReactNode
  name?: string
  value?: string | string[]
}

export interface FlipButtonGroupFieldProps extends FlipButtonGroupProps {
  name: string
  label: string
  isRequired?: boolean
  validate?: RegisterOptions
  value?: string
}
