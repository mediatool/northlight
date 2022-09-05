import { NumberInputProps as ChakraNumberInputProps } from '@chakra-ui/react'
import { FieldValidator } from 'formik'
import { ChangeEvent } from 'react'
import { StackingDirection } from '../field'

export type NumberInputSizeProps = 'sm' | 'md' | 'lg'

export type NumberInputProps =
  ChakraNumberInputProps
  & {
    size?: NumberInputSizeProps
    onChange?: (e: ChangeEvent<HTMLInputElement>) => void
  }

export type NumberInputFieldProps =
  ChakraNumberInputProps
  & {
    name: string
    label: string
    validate?: FieldValidator
    size?: NumberInputSizeProps
    isRequired?: boolean
    unit?: string
    direction?: StackingDirection
  }
