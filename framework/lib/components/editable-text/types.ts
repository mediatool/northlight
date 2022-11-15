import { ReactElement } from 'react'
import { EditableProps as ChakraEditableProps } from '@chakra-ui/react'

export type EditableSizes = 'sm' | 'md' | 'lg'

export interface EditableProps extends ChakraEditableProps {
  value?: string
  size?: EditableSizes
  leftItem? : ReactElement
}
export interface EditableControlsProps {
  size: EditableSizes
}
