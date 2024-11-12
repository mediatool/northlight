import { SwitchProps as ChakraSwitchProps, StackDirection } from '@chakra-ui/react'
import { ChangeEvent } from 'react'
import { RegisterOptions } from 'react-hook-form'

export interface SwitchProps extends Omit<ChakraSwitchProps, 'value'> {
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void
  value?: boolean
}

export interface SwitchFieldProps extends ChakraSwitchProps {
  name: string
  label: string
  validate?: RegisterOptions
  isRequired?: boolean
  direction?: StackDirection
  labelPlacement?: 'left' | 'right'
  labelSize?: '2xs' | 'xs' | 'md' | 'lg'
}
