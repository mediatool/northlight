import { ActionMeta, Props as ChakraReactSelectProps, GroupBase, MenuListProps } from 'chakra-react-select'
import { StackDirection } from '@chakra-ui/react'
import { ComponentType } from 'react'
import { RegisterOptions } from 'react-hook-form'

type Size = 'sm' | 'md' | 'lg'
export interface Option {
  label: string
  value: string
}
export interface SelectProps<T> extends Omit<ChakraReactSelectProps<T, boolean, GroupBase<T>>, 'onChange' | 'value'> {
  value?: Option | Option[]
  onChange?: (val: any, event: ActionMeta<T>) => void
  onAdd?: (val: unknown) => void
  onRemove?: (val: unknown) => void
  name?: string
  size?: Size
  'data-testid'?: string
  loadingList?: ComponentType<MenuListProps<T, boolean, GroupBase<T>>> | undefined
}

export type SelectFieldProps<T> =
  Omit<SelectProps<T>, 'onChange'>
  & {
    onChange?: (val: T | T[], event:ActionMeta<T>) => void
    direction?: StackDirection
    name: string
    label: string
    validate?: RegisterOptions
    isRequired?: boolean
    isMulti?: boolean
  }
