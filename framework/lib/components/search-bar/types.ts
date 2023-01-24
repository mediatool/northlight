import { StackDirection } from '@chakra-ui/react'
import {
  ActionMeta,
  Props as ChakraReactSelectProps,
  ChakraStylesConfig,
  GroupBase,
} from 'chakra-react-select'
import { RegisterOptions } from 'react-hook-form'

type Size = 'sm' | 'md' | 'lg'
export interface SearchBarOptionType {
  label: string
  value: any
}
interface DebounceOptionsType {
  leading?: boolean
  maxWait?: number
  trailing?: boolean
}

export type CustomElementType<T extends SearchBarOptionType> = ((
  props: T
) => JSX.Element)
| null
export interface SearchBarProps<T extends SearchBarOptionType>
  extends Omit<
  ChakraReactSelectProps<T, boolean, GroupBase<T>>,
  'onChange' | 'value'
  > {
  value?: T | T[]
  onChange?: (val: any, event: ActionMeta<T>) => void
  onAdd?: (val: unknown) => void
  onRemove?: (val: unknown) => void
  size?: Size
  'data-testid'?: string
  debouncedWaitTime?: number
  debouncedOptions?: DebounceOptionsType
  clearInputOnSelect?: boolean
  closeMenuonSelect?: boolean
  defaultOptions?: T[]
  sx?: ChakraStylesConfig<any>
  isMulti?: boolean
  customOption?: CustomElementType<T>
  customTag?: CustomElementType<T>
  loadOptions?: ((query: string) => Promise<T[]>) | null
  onSearchInputChange?: (input: string) => void
}

export interface SearchBarFieldProps<T extends SearchBarOptionType> extends Omit<SearchBarProps<T>, 'onChange'> {
  onChange?: (val: T | T[], event: ActionMeta<T>) => void
  direction?: StackDirection
  name: string
  label: string
  validate?: RegisterOptions
  isRequired?: boolean
}
