import React from 'react'
import { IconProps as ChakraIconProps, Icon } from '@chakra-ui/react'
import { IconProps } from '~lib/types'

type Props = ChakraIconProps & IconProps

export const PositionMarkerIcon = (props: Props) => (
  <Icon viewBox="0 0 32 32" { ...props }>
    <g
      fill="currentColor"
      stroke="currentColor"
      strokeLinecap="square"
      strokeLinejoin="miter"
      strokeMiterlimit="10"
      strokeWidth={ 2 }
    >
      <path fill="none" d="M16 17a8 8 0 1 0 0-16 8 8 0 0 0 0 16ZM16 17v9M12.001 23.166C6.217 23.657 2 25.188 2 27c0 2.209 6.268 4 14 4s14-1.791 14-4c0-1.812-4.217-3.343-10.001-3.834" />
    </g>
  </Icon>
)
