import { NumberInputProps as ChakraNumberInputProps, StackDirection } from '@chakra-ui/react'
import { RegisterOptions } from 'react-hook-form'

export type NumberInputSizeProps = 'sm' | 'md' | 'lg'

export type NumberInputProps =
  ChakraNumberInputProps
  & {
    size?: NumberInputSizeProps
    onChange?: (...event: any[]) => void
  }

export type NumberInputFieldProps =
  Omit<ChakraNumberInputProps, 'onChange'>
  & {
    name: string
    label: string
    validate?: RegisterOptions
    size?: NumberInputSizeProps
    isRequired?: boolean
    unit?: string
    direction?: StackDirection
    onChange?: (e: React.ChangeEvent<HTMLInputElement> | string) => void
  }
