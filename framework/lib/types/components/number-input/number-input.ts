import { NumberInputProps as ChakraNumberInputProps } from '@chakra-ui/react'
import { RegisterOptions } from 'react-hook-form'
import { StackingDirection } from '../field'

export type NumberInputSizeProps = 'sm' | 'md' | 'lg'

export type NumberInputProps =
  ChakraNumberInputProps
  & {
    size?: NumberInputSizeProps
    onChange?: (...event: any[]) => void
  }

export type NumberInputFieldProps =
  ChakraNumberInputProps
  & {
    name: string
    label: string
    validate?: RegisterOptions
    size?: NumberInputSizeProps
    isRequired?: boolean
    unit?: string
    direction?: StackingDirection
  }
