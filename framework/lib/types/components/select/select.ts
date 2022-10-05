import { Props as ChakraReactSelectProps, GroupBase, MenuListProps } from 'chakra-react-select'
import { ComponentType } from 'react'
import { RegisterOptions } from 'react-hook-form'
import { StackingDirection } from '../field'

type size = 'sm' | 'md' | 'lg'

export type SelectProps<T> =
ChakraReactSelectProps<T, boolean, GroupBase<T>>
& {
  value?: string
  onChange?: any
  name?: string
  size?: size
  'data-testid'?: string
  loadingList?: ComponentType<MenuListProps<T, boolean, GroupBase<T>>> | undefined
}

export type SelectFieldProps<T> =
  SelectProps<T>
  & {
    direction?: StackingDirection
    name: string
    label: string
    validate?: RegisterOptions
    isRequired?: boolean
    isMulti?: boolean
  }
