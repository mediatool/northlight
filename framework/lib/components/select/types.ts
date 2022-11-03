import { Props as ChakraReactSelectProps, GroupBase, MenuListProps } from 'chakra-react-select'
import { StackDirection } from '@chakra-ui/react'
import { ComponentType } from 'react'
import { RegisterOptions } from 'react-hook-form'

type size = 'sm' | 'md' | 'lg'

export type SelectProps<T> =
ChakraReactSelectProps<T, boolean, GroupBase<T>>
& {
  value?: string
  onChange?: (val: any) => void
  onAdd?: (val: string) => void
  onRemove?: (val: string) => void
  name?: string
  size?: size
  'data-testid'?: string
  loadingList?: ComponentType<MenuListProps<T, boolean, GroupBase<T>>> | undefined
}

export type SelectFieldProps<T> =
  SelectProps<T>
  & {
    direction?: StackDirection
    name: string
    label: string
    validate?: RegisterOptions
    isRequired?: boolean
    isMulti?: boolean
  }
