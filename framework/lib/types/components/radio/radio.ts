import { RadioGroupProps as ChakraRadioGroupProps, RadioProps as ChakraRadioProps } from '@chakra-ui/react'
import { ChangeEvent } from 'react'
import { RegisterOptions } from 'react-hook-form'
import { StackingDirection } from '../field'

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
      direction?: StackingDirection
    }

export type RadioFieldGroupProps =
    ChakraRadioGroupProps
    & {
      direction?: StackingDirection
      name: string
      label: string
      validate?: RegisterOptions
      isRequired?: boolean
      value?: string
    }
