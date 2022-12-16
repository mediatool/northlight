import {
  ActionMeta,
  Props as ChakraReactSelectProps,
  ChakraStylesConfig,
  GroupBase,
} from 'chakra-react-select'

type size = 'sm' | 'md' | 'lg'
export interface SearchBarOptionType {
  label: string
  value: any
}
interface DebounceOptionsType {
  leading?: boolean
  maxWait?: number
  trailing?: boolean
}

export type CustomElement = (({ value, label }: SearchBarOptionType) => JSX.Element) | null

export interface SearchBarProps<T>
  extends Omit<
  ChakraReactSelectProps<T, boolean, GroupBase<T>>,
  'onChange' | 'value'
  > {
  value?: SearchBarOptionType | SearchBarOptionType[]
  onChange?: (val: any, event: ActionMeta<T>) => void
  onAdd?: (val: string) => void
  onRemove?: (val: string) => void
  size?: size
  'data-testid'?: string
  debouncedWaitTime?: number
  debouncedOptions?: DebounceOptionsType
  clearInputOnSelect?: boolean
  closeMenuonSelect?: boolean
  defaultOptions?: SearchBarOptionType[]
  sx?: ChakraStylesConfig<any>
  isMulti?: boolean
  customOption?: CustomElement
  customTag?: CustomElement
  loadOptions?: ((query: string) => Promise<SearchBarOptionType[]>) | null
}
