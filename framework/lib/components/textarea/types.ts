import { TextareaProps as ChakraTextareaProps, StackDirection } from '@chakra-ui/react'
import { ChangeEvent } from 'react'
import { RegisterOptions } from 'react-hook-form'

export type TextSizeProps = 'sm' | 'md'

export type TextareaProps =
  ChakraTextareaProps
  & {
    onChange?: (...event: any[]) => void | ((e: ChangeEvent<HTMLInputElement>) => void)
    value?: boolean
    size?: TextSizeProps
  }

export type TextareaFieldProps =
  ChakraTextareaProps
  & {
    name: string
    label: string
    validate?: RegisterOptions
    isRequired?: boolean
    size?: TextSizeProps
    direction?: StackDirection
  }
