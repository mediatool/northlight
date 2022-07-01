import { TextareaProps as ChakraTextareaProps } from '@chakra-ui/react'
import { FieldValidator } from 'formik'
import { ChangeEvent } from 'react'

export type TextSizeProps = 'sm' | 'md'

export type TextareaProps =
  ChakraTextareaProps
  & {
    onChange?: (e: ChangeEvent<HTMLInputElement>) => void
    value?: boolean
    size?: TextSizeProps
  }

export type TextareaFieldProps =
  ChakraTextareaProps
  & {
    name: string
    label: string
    validate?: FieldValidator
    isRequired?: boolean
    size?: TextSizeProps
  }
