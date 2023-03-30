import { ComponentType } from 'react'
import { IconProps as ChakraIconProps } from '@chakra-ui/react'

export interface IconProps extends ChakraIconProps {
  as?: ComponentType<any>
  size?: 'xs' | 'sm' | 'md' | 'lg'
}
