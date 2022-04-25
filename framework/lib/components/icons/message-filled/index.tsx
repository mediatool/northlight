import React from 'react'
import { IconProps as ChakraIconProps, Icon } from '@chakra-ui/react'
import { IconProps } from '~lib/types'

type Props = ChakraIconProps & IconProps

export const MessageIconFilled = (props: Props) => (
  <Icon viewBox="0 0 32 32" { ...props }>
    <g
      fill="currentColor"
      stroke="none"
      strokeLinecap="square"
      strokeLinejoin="miter"
      strokeMiterlimit="10"
      strokeWidth={ 2 }
    >
      <path fill="currentColor" d="M28.8 0H3.2A3.21 3.21 0 0 0 0 3.2V32l6.4-6.4h22.4c1.76 0 3.2-1.44 3.2-3.2V3.2C32 1.44 30.56 0 28.8 0Z" />
    </g>
  </Icon>
)
