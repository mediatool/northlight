import { ReactElement } from 'react'
import { EditableProps as ChakraEditableProps } from '@chakra-ui/react'

export type EditableSizes = 'sm' | 'md' | 'lg'

export type EditableVariant = 'brand' | 'default'

export interface EditableProps extends ChakraEditableProps {
  value?: string
  size?: EditableSizes
  leftItem? : ReactElement
  variant?: EditableVariant
}
export interface EditableControlsProps {
  size: EditableSizes
  variant: EditableVariant
}
