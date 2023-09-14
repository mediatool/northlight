import { MultiValue } from 'chakra-react-select'
import { SelectProps } from '../select'

export interface TagsInputProps<T>
  extends Omit<
  SelectProps<T, true>,
  | 'value'
  | 'formatCreateLabel'
  | 'isValidNewOption'
  | 'onAdd'
  | 'onRemove'
  | 'leftIcon'
  | 'icon'
  | 'customOption'
  > {
  value?: MultiValue<T>
  formatCreateLabel?: (textInputValue: string) => string
  isValidNewOption?: (option: string, selectOptions: MultiValue<T>) => boolean
}
