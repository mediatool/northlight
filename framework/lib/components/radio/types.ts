import { RadioGroupProps as ChakraRadioGroupProps, RadioProps as ChakraRadioProps, StackDirection } from '@chakra-ui/react'
import { ChangeEvent } from 'react'
import { RegisterOptions } from 'react-hook-form'

export type RadioProps =
  ChakraRadioProps
  & {
    onChange?: (e: ChangeEvent<HTMLInputElement>) => void
    value?: string
  }

export type RadioFieldProps =
  ChakraRadioProps
  & {
    value: string
  }

export type RadioGroupProps =
    ChakraRadioGroupProps
    & {
      direction?: StackDirection
    }

export type RadioFieldGroupProps =
    ChakraRadioGroupProps
    & {
      direction?: StackDirection
      name: string
      label: string
      validate?: RegisterOptions
      isRequired?: boolean
      value?: string
    }
