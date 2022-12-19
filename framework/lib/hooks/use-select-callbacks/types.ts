import {
  ActionMeta,
  Props as ChakraReactSelectProps,
  GroupBase,
} from 'chakra-react-select'

export interface UseSelectCallbacksProps<T>
  extends Omit<
  ChakraReactSelectProps<T, boolean, GroupBase<T>>,
  'onChange' | 'value'
  > {
  onChange: (val: unknown, event: ActionMeta<T>) => void
  onAdd: (val: unknown) => void
  onRemove: (val: unknown) => void
  isMulti: boolean
  value: T | T[]
}
