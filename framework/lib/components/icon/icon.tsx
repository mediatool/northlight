import React from 'react'
import {
  Icon as ChakraIcon,
  IconProps as ChakraIconProps,
} from '@chakra-ui/react'
import { IconProps, IconType } from '~lib/types'
import { iconMap } from './icon-map'

type Props = ChakraIconProps & IconProps & {
  type: IconType
}

export const Icon = ({
  type, boxSize, size = 6, ...rest
}: Props) => {
  const Component = iconMap[type]

  if (!Component) {
    return <ChakraIcon title={ `No such icon ${type}` } />
  }

  return (
    <Component
      boxSize={ size }
      { ...rest }
    />
  )
}
