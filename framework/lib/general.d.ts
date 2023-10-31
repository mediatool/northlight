import { ComponentType } from 'react'
import {
  GroupBase,
} from 'chakra-react-select'
import { CustomElementType, SearchBarOptionType } from './components/search-bar'

declare module 'react-select/dist/declarations/src/Select' {
  export interface Props<
      Option extends SearchBarOptionType,
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      IsMulti extends boolean,
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      Group extends GroupBase<Option>
    > {
    customOption?: CustomElementType<Option>
    customTag?: CustomElementType<Option>
    icon?: ComponentType<any>
    leftComponent?: React.ReactNode
  }
}

declare module 'react' {
  function forwardRef<T, P = {}> (
    render: (props: P, ref: React.Ref<T>) => React.ReactElement | null
  ): (props: P & React.RefAttributes<T>) => React.ReactElement | null
}
