import { FormLabelProps } from '@chakra-ui/react'

export type LabelSizes = '2xs' | 'xs' | 'sm' | 'md' | 'lg'
export interface LabelProps extends FormLabelProps {
  size?: LabelSizes
}
