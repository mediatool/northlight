import { ComponentType } from 'react'
import {
  GroupBase,
} from 'chakra-react-select'
import { CustomElementType, SearchBarOptionType } from './components/search-bar/index.ts'

declare module 'react' {
  function forwardRef<T, P = {}> (
    render: (props: P, ref: React.Ref<T>) => React.ReactElement | null
  ): (props: P & React.RefAttributes<T>) => React.ReactElement | null
}
