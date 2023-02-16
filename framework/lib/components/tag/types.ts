import { TagProps as ChakraTagProps, StackProps } from '@chakra-ui/react'

export interface TagProps extends ChakraTagProps {
  bgColor?: string
  variant?: 'solid' | 'subtle'
}
export interface TagGroupProps extends StackProps {
  max?: number
  spacing?: number | string
  children: JSX.Element[] | React.ReactNode[]
}
