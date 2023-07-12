import { SwitchProps as ChakraSwitchProps, StackDirection } from '@chakra-ui/react'
import { ChangeEvent } from 'react'
import { RegisterOptions } from 'react-hook-form'

export type SwitchProps =
  ChakraSwitchProps
  & {
    onChange?: (e: ChangeEvent<HTMLInputElement>) => void
    value?: boolean
  }

export type SwitchFieldProps =
  ChakraSwitchProps
  & {
    name: string
    label: string
    validate?: RegisterOptions
    isRequired?: boolean
    direction?: StackDirection
    labelPosition?: 'left' | 'right'
  }
