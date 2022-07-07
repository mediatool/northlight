import React from 'react'
import { IconProps as ChakraIconProps, Icon } from '@chakra-ui/react'
import { IconProps } from '../../../../lib/types'

type Props = ChakraIconProps & IconProps

export const CheckedIconFilled = (props: Props) => (
  <Icon viewBox="0 0 32 32" { ...props }>
    <g
      fill="currentColor"
      stroke="none"
      strokeLinecap="square"
      strokeLinejoin="miter"
      strokeMiterlimit="10"
      strokeWidth={ 2 }
    >
      <path fill="currentColor" d="M16 0a16 16 0 1 0 16 16A16.047 16.047 0 0 0 16 0Zm-3 22.414L7.586 17 9 15.586l4 4 10-10L24.414 11 13 22.414Z" />
    </g>
  </Icon>
)
