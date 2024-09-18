import { RegisterOptions } from 'react-hook-form'
import { StackDirection } from '@chakra-ui/react'
import { NumberInputProps } from '../number-input'

export type ComboPickerValue = {
  input: number
  option: ComboPickerOption
}

export type ComboPickerOption = {
  label: string
  value: string
}

export interface ComboPickerProps extends Omit<NumberInputProps, | 'value'> {
  options: ComboPickerOption[]
  value?: ComboPickerValue
  onChange?: (value: ComboPickerValue) => void
  defaultOption?: ComboPickerOption
}

export interface ComboPickerFieldProps extends ComboPickerProps {
  name: string
  label: string
  validate?: RegisterOptions
  isRequired?: boolean
  direction?: StackDirection
  labelPlacement?: 'left' | 'right'
  labelSize?: '2xs' | 'xs' | 'sm' | 'md' | 'lg'
}
