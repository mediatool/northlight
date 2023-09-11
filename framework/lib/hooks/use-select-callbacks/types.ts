import {
  ActionMeta,
  Props as ChakraReactSelectProps,
  GroupBase,
  MultiValue,
  SingleValue,
} from 'chakra-react-select'

export interface UseSelectCallbacksProps<T>
  extends Omit<
  ChakraReactSelectProps<T, boolean, GroupBase<T>>,
  'onChange' | 'value'
  > {
  onChange: (val: MultiValue<T> | SingleValue<T>, event: ActionMeta<T>) => void
  onAdd: (val: unknown) => void
  onRemove: (val: unknown) => void
  isMulti: boolean
  value: T | T[]
}
export interface BasicOption {
  label: string
  value: unknown
}

export type SelectActionMeta<T> = ActionMeta<T>
