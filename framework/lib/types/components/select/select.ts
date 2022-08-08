import { Props as ChakraReactSelectProps } from 'chakra-react-select'
import { FieldProps, FieldValidator } from 'formik'
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

export type SelectProps =
ChakraReactSelectProps
& {
  value?: string
  onChange?: any
  name?: string
  size?: size
}

export type SelectFieldProps =
  SelectProps
  & {
    direction?: StackingDirection
    name: string
    label: string
    validate?: FieldValidator
    isRequired?: boolean
    isMulti?: boolean
  }
