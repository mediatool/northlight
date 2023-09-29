import {
  ActionMeta,
  Props as ChakraReactSelectProps,
  GroupBase,
  MenuListProps,
  MultiValue,
  SelectInstance,
  SingleValue,
} from 'chakra-react-select'
import { StackDirection } from '@chakra-ui/react'
import { ComponentType, Ref } from 'react'
import { RegisterOptions } from 'react-hook-form'
import { InputFieldProps } from '../../types'

type Size = 'sm' | 'md' | 'lg'
export interface Option {
  label: string
  value: string
}

export interface SelectProps<T, K extends boolean>
  extends Omit<
  ChakraReactSelectProps<T, K, GroupBase<T>>,
  'onChange' | 'value' | 'isMulti'
  > {
  /** Whatever is currently selected by the select will be controlled by value prop */
  value?: Option | Option[]
  /** Take a look at the second argument, the event,
   *  for info as to which specific element was added */
  onChange?: (option: K extends true ? MultiValue<T> : SingleValue<T>, event: ActionMeta<T>) => void
  onAdd?: (val: unknown) => void
  onRemove?: (val: unknown) => void
  /** Used for accessibility */
  name?: string
  size?: Size
  'data-testid'?: string
  loadingList?:
  | ComponentType<MenuListProps<T, K, GroupBase<T>>>
  | undefined
  /** Custom icon that will be put to the faremost right of the component */
  icon?: ComponentType<any>
  /** Custom icon that will be put to the faremost left of the component */
  leftIcon?: ComponentType<any>
  customOption?: ((option: T) => JSX.Element) | null
  customTag?: ((option: T) => JSX.Element) | null
  isMulti?: K
  ref?: Ref<SelectInstance<T, K, GroupBase<T>>>
}

export type SelectFieldProps<T, K extends boolean = false> = SelectProps<T, K> &
Omit<InputFieldProps, 'isMulti'> & {
  direction?: StackDirection
  name: string
  label: string
  validate?: RegisterOptions
  isRequired?: boolean
}
