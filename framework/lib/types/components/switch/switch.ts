import { SwitchProps as ChakraSwitchProps } from '@chakra-ui/react'
import { FieldValidator } from 'formik'
import { ChangeEvent } from 'react'

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
    validate?: FieldValidator
    isRequired?: boolean
  }
