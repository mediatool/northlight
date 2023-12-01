import { NumberInputProps as ChakraNumberInputProps, StackDirection } from '@chakra-ui/react'
import { RegisterOptions } from 'react-hook-form'
import { InputFieldProps } from '../../types'

export type NumberInputSizeProps = 'sm' | 'md' | 'lg'

export interface NumberInputProps extends ChakraNumberInputProps {
  size?: NumberInputSizeProps
  onChange?: (...event: any[]) => void
  onlyAcceptPercentage?: boolean
  onInputChange?: (input: string) => void
  /** If true it will show arrows on far right of number input that when clicked can
   * increment and decrement the number value.
   */
  enableStepperArrows?: boolean
}

export type NumberInputFieldProps =
  Omit<NumberInputProps, 'onChange'>
  & InputFieldProps
  & {
    name: string
    label: string
    validate?: RegisterOptions
    size?: NumberInputSizeProps
    isRequired?: boolean
    unit?: string
    direction?: StackDirection
    onChange?: (e: number | string) => void
    inputLeftElement?: React.ReactNode
    inputRightElement?: React.ReactNode
  }

export interface NumberInputStepperProps {
  includePercentage?: boolean
  enableStepperArrows?: boolean
}
