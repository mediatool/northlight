import { Props as ChakraReactSelectProps } from 'chakra-react-select'
import { FieldProps, FieldValidator } from 'formik'

export interface FormikSelectProps extends FieldProps {
  options: any[]
  isMulti?: boolean
  className?: string
  placeholder?: string
  name?: string
}

export type SelectProps =
ChakraReactSelectProps
& {
  value?: string
  onChange?: any
  name?: string
}

type StackingDirection = 'row' | 'column'
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
