import React from 'react'
import {
  Icon as ChakraIcon,
  IconProps as ChakraIconProps,
  useStyleConfig,
} from '@chakra-ui/react'
import { IconProps, IconType } from '../../types'
import { iconMap } from './icon-map'

type Props = ChakraIconProps & IconProps & {
  type: IconType
}

export const Icon = ({
  type, color, ...rest
}: Props) => {
  const styles = useStyleConfig('Icon', { color })
  const Component = iconMap[type]

  if (!Component) {
    return <ChakraIcon name={ `No such icon ${type}` } />
  }

  return (
    <Component
      __css={ styles }
      { ...rest }
    />
  )
}
