import { NumberInputProps as ChakraNumberInputProps, StackDirection } from '@chakra-ui/react'
import { RegisterOptions } from 'react-hook-form'

export type NumberInputSizeProps = 'sm' | 'md' | 'lg'

export type NumberInputProps =
  ChakraNumberInputProps
  & {
    size?: NumberInputSizeProps
    onChange?: (...event: any[]) => void
    onlyAcceptPercentage?: boolean
    onInputChange?: (input: string) => void
  }

export type NumberInputFieldProps =
  Omit<NumberInputProps, 'onChange'>
  & {
    name: string
    label: string
    validate?: RegisterOptions
    size?: NumberInputSizeProps
    isRequired?: boolean
    unit?: string
    direction?: StackDirection
    onChange?: (e: number | string) => void
  }

export interface NumberInputStepperProps {
  includePercentage?: boolean
}
