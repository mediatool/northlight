import { CheckboxProps as ChakraCheckboxProps } from '@chakra-ui/react'
import { FieldValidator } from 'formik'
import { ChangeEvent } from 'react'

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
    validate?: FieldValidator
    isRequired?: boolean
    variant?: CheckboxVariants
  }
