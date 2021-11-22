import React from 'react'
import { IconProps as ChakraIconProps } from '@chakra-ui/react'
import { IconProps, IconType } from '~lib/types'
import { iconMap } from './icon-map'

type Props =
  ChakraIconProps
  & IconProps
  & {
    type: IconType
    size?: number
  }

export const Icon = ({
  type, boxSize, size = 6, ...rest
}: Props) => {
  const Component = iconMap[type]

  return (
    <Component
      boxSize={ size }
      { ...rest }
    />
  )
}
