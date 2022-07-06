import { Props as ChakraReactSelectProps } from 'chakra-react-select'
import { FieldValidator } from 'formik'
import { ChangeEvent } from 'react'

type StackingDirection = 'row' | 'column'

export type SelectProps =
  ChakraReactSelectProps
  & {
    onChange?: (e: ChangeEvent<HTMLInputElement>) => void
    value?: boolean
  }

export type SelectFieldProps =
  SelectProps
  & {
    direction?: StackingDirection
    name: string
    label: string
    validate?: FieldValidator
    isRequired?: boolean
  }
