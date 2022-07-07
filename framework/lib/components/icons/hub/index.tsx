import React from 'react'
import { IconProps as ChakraIconProps, Icon } from '@chakra-ui/react'
import { IconProps } from '../../../../lib/types'

type Props = ChakraIconProps & IconProps

export const HubIcon = (props: Props) => (
  <Icon viewBox="0 0 32 32" { ...props }>
    <g
      fill="currentColor"
      stroke="currentColor"
      strokeLinecap="square"
      strokeLinejoin="miter"
      strokeMiterlimit="10"
      strokeWidth={ 2 }
    >
      <polygon fill="none" points="6,16 2,9 6,2 14,2 18,9 13.9,16 " stroke="currentColor" />
      <polygon fill="none" points="6,30 2,23 6,16 14,16 18,23 13.9,30 " stroke="currentColor" />
      <polygon fill="none" points="18,23 14,16 18,9 26,9 30,16 25.9,23 " stroke="currentColor" />
    </g>
  </Icon>
)
