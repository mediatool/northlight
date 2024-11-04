import { CheckboxProps as ChakraCheckboxProps, CheckboxGroupProps, StackDirection } from '@chakra-ui/react'
import { ChangeEvent } from 'react'
import { RegisterOptions } from 'react-hook-form'

export type CheckboxVariants = 'default' | 'rounded'

export interface CheckboxProps extends Omit<ChakraCheckboxProps, 'value'> {
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void
  value?: boolean | string | number
  variant?: CheckboxVariants
}

export interface CheckboxFieldProps extends ChakraCheckboxProps {
  name: string
  label: string
  validate?: RegisterOptions
  isRequired?: boolean
  variant?: CheckboxVariants
  direction?: StackDirection
  labelPlacement?: 'left' | 'right'
  labelSize?: '2xs' | 'xs' | 'sm' | 'md' | 'lg'
}

export interface CheckboxFieldGroupProps extends CheckboxGroupProps {
  direction?: StackDirection
  name: string
  label: string
  validate?: RegisterOptions
  isRequired?: boolean
  value?: string[]
}
