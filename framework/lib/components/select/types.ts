import { ActionMeta, Props as ChakraReactSelectProps, GroupBase, MenuListProps } from 'chakra-react-select'
import { StackDirection } from '@chakra-ui/react'
import { ComponentType } from 'react'
import { RegisterOptions } from 'react-hook-form'

type size = 'sm' | 'md' | 'lg'
interface Option {
  label: string
  value: string
}
export interface SelectProps<T> extends Omit<ChakraReactSelectProps<T, boolean, GroupBase<T>>, 'onChange' | 'value'> {
  value?: Option | Option[]
  onChange?: (val: any, event: ActionMeta<T>) => void
  onAdd?: (val: string) => void
  onRemove?: (val: string) => void
  name?: string
  size?: size
  'data-testid'?: string
  loadingList?: ComponentType<MenuListProps<T, boolean, GroupBase<T>>> | undefined
}

export type SelectFieldProps<T> =
  Omit<SelectProps<T>, 'onChange'>
  & {
    onChange?: (val: T | T[]) => void
    direction?: StackDirection
    name: string
    label: string
    validate?: RegisterOptions
    isRequired?: boolean
    isMulti?: boolean
  }
