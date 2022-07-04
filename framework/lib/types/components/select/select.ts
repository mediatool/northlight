import { SelectProps as ChakraSelectProps } from '@chakra-ui/react'
import { FieldValidator } from 'formik'
import { ChangeEvent } from 'react'

type SelectSizes = 'sm' | 'md' | 'lg'
type StackingDirection = 'row' | 'column'

export type SelectProps =
  ChakraSelectProps
  & {
    onChange?: (e: ChangeEvent<HTMLInputElement>) => void
    value?: boolean
    size?: SelectSizes
  }

export type SelectFieldProps =
  ChakraSelectProps
  & {
    direction?: StackingDirection
    name: string
    label: string
    validate?: FieldValidator
    isRequired?: boolean
  }
