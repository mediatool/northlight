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
  onChange: (val: any, event: ActionMeta<T>) => void
  onAdd: (val: string) => void
  onRemove: (val: string) => void
  isMulti: boolean
}
