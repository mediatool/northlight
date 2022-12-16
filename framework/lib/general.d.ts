import {
  GroupBase,
} from 'chakra-react-select'
import { CustomElement } from './components'

declare module 'react-select/dist/declarations/src/Select' {

  export interface Props<
      Option,
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      IsMulti extends boolean,
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      Group extends GroupBase<Option>
    > {
    customOption?: CustomElement
    customTag?: CustomElement
  }
}
