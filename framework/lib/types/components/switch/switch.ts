import { SwitchProps as ChakraSwitchProps } from '@chakra-ui/react'
import { FieldValidator } from 'formik'
import { BaseSyntheticEvent } from 'react'

export type SwitchProps =
  ChakraSwitchProps
  & {
    onChange?: (e: BaseSyntheticEvent) => void
    value?: boolean
  }

export type SwitchFieldProps =
  ChakraSwitchProps
  & {
    name: string
    label: string
    validate?: FieldValidator
    isRequired?: boolean
  }
