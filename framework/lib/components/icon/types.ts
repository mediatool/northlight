import { ComponentType } from 'react'
import { IconProps as ChakraIconProps } from '@chakra-ui/react'

export type IconProps = ChakraIconProps & {
  as?: ComponentType<any>
}
