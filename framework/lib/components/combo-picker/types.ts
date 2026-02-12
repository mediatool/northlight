import { RegisterOptions } from 'react-hook-form'
import { StackDirection } from '@chakra-ui/react'
import { FormattedNumberInputPreset, FormattedNumberInputProps } from '../text-field'

export type ComboPickerValue = {
  input?: number
  option: ComboPickerOption
}

export type ComboPickerOption = {
  label: string
  value: string
}

export interface ComboPickerProps extends Omit<FormattedNumberInputProps, | 'value' | 'onChange'> {
  options: ComboPickerOption[]
  value: ComboPickerValue
  onChange?: (value: ComboPickerValue) => void
  defaultOption?: ComboPickerOption
  precision?: number
  formatPreset?: FormattedNumberInputPreset
  isDisabled?: boolean
  isReadOnly?: boolean
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
