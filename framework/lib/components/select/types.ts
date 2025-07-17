import {
  ActionMeta,
  Props as ChakraReactSelectProps,
  GroupBase,
  MenuListProps,
  MultiValue,
  SelectInstance,
  SingleValue,
} from 'chakra-react-select'
import { Icon, StackDirection } from '@chakra-ui/react'
import { ComponentProps, ComponentType, Ref } from 'react'
import { RegisterOptions } from 'react-hook-form'
import { InputFieldProps } from '../../types'

export type { SingleValue, MultiValue } from 'chakra-react-select'

type Size = 'sm' | 'md' | 'lg'
export interface Option<T extends string = string> {
  label: string
  value: T
  isCreation?: boolean
  icon?: ComponentProps<typeof Icon>
}

export interface SelectProps<T, K extends boolean>
  extends Omit<
  ChakraReactSelectProps<T, K, GroupBase<T>>,
  'onChange' | 'value' | 'isMulti'
  > {
  /** Whatever is currently selected by the select will be controlled by value prop, if value is
   *  of type string then it will automatically pair it up with matching object from options list */
  value?: K extends true ? T[] | string[] : T | string | null
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
  /** Custom components that will be put to the faremost left of the select input box */
  leftComponent?: React.ReactNode
  customOption?: ((option: T) => JSX.Element) | null
  isMulti?: K
  ref?: Ref<SelectInstance<T, K, GroupBase<T>>>
  /** Should return a unique key that is tracked so when the key changes
      the sub-components for react-select will be recomputed/rerendered
  */
  generateComponentsUpdateKey?: () => unknown
}

export type SelectFieldProps<T, K extends boolean = false> = SelectProps<T, K> &
Omit<InputFieldProps, 'isMulti'> & {
  direction?: StackDirection
  name: string
  label: string
  validate?: RegisterOptions
  isRequired?: boolean
  onChange?: (option: K extends true ? MultiValue<T> | undefined : SingleValue<T> | undefined,
    event: ActionMeta<T>) => void
}
