import { CheckboxProps as ChakraCheckboxProps, StackDirection } from '@chakra-ui/react'
import { ChangeEvent } from 'react'
import { RegisterOptions } from 'react-hook-form'

export type CheckboxVariants = 'default' | 'rounded'

export type CheckboxProps =
  ChakraCheckboxProps
  & {
    onChange?: (e: ChangeEvent<HTMLInputElement>) => void
    value?: boolean
    variant?: CheckboxVariants
  }

export type CheckboxFieldProps =
  ChakraCheckboxProps
  & {
    name: string
    label: string
    validate?: RegisterOptions
    isRequired?: boolean
    variant?: CheckboxVariants
    direction?: StackDirection
  }
