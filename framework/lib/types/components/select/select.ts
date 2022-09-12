import { Props as ChakraReactSelectProps, GroupBase, MenuListProps } from 'chakra-react-select'
import { FieldProps, FieldValidator } from 'formik'
import { ComponentType } from 'react'
import { StackingDirection } from '../field'

type size = 'sm' | 'md' | 'lg'

export interface FormikSelectProps extends FieldProps {
  options: any[]
  isMulti?: boolean
  className?: string
  placeholder?: string
  name?: string
  isDisabled?: boolean
  isInvalid?: boolean
  size?: size
}

export type SelectProps<T> =
ChakraReactSelectProps<T, boolean, GroupBase<T>>
& {
  value?: string
  onChange?: any
  name?: string
  size?: size
  loadingList?: ComponentType<MenuListProps<T, boolean, GroupBase<T>>> | undefined
}

export type SelectFieldProps<T> =
  SelectProps<T>
  & {
    direction?: StackingDirection
    name: string
    label: string
    validate?: FieldValidator
    isRequired?: boolean
    isMulti?: boolean
  }
