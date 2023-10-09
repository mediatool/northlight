import {
  ActionMeta,
  Props as ChakraReactSelectProps,
  GroupBase,
  OnChangeValue,
} from 'chakra-react-select'

export interface UseSelectCallbacksProps<T, K extends boolean = false>
  extends Omit<
  ChakraReactSelectProps<T, boolean, GroupBase<T>>,
  'onChange' | 'value'
  > {
  onChange: (option: OnChangeValue<T, K>, event: ActionMeta<T>) => void
  onAdd: (val: unknown) => void
  onRemove: (val: unknown) => void
  isMulti?: boolean
  value: T | T[]
}
export interface BasicOption {
  label: string
  value: unknown
}

export type SelectActionMeta<T> = ActionMeta<T>
