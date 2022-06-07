import React from 'react'
import { IconProps as ChakraIconProps, Icon } from '@chakra-ui/react'
import { IconProps } from '~lib/types'

type Props = ChakraIconProps & IconProps

export const ThreeDotsIconFilled = (props: Props) => (
  <Icon viewBox="0 0 32 32" { ...props }>
    <g
      fill="currentColor"
      stroke="none"
      strokeLinecap="square"
      strokeLinejoin="miter"
      strokeMiterlimit="10"
      strokeWidth={ 2 }
    >
      <path fill="currentColor" d="M18.667 16a2.667 2.667 0 1 0-5.334 0 2.667 2.667 0 0 0 5.334 0ZM18.667 28a2.667 2.667 0 1 0-5.334 0 2.667 2.667 0 0 0 5.334 0ZM18.667 4a2.667 2.667 0 1 0-5.334 0 2.667 2.667 0 0 0 5.334 0Z" />
    </g>
  </Icon>
)
