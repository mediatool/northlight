import React from 'react'
import { IconProps as ChakraIconProps, Icon } from '@chakra-ui/react'
import { IconProps } from '~lib/types'

type Props = ChakraIconProps & IconProps

export const CaretUpIcon = (props: Props) => (
  <Icon viewBox="0 0 32 32" { ...props }>
    <g
      fill="currentColor"
      stroke="currentColor"
      strokeLinecap="square"
      strokeLinejoin="miter"
      strokeMiterlimit="10"
      strokeWidth={ 2 }
    >
      <path d="m10 19 6-6 6 6" fill="none" stroke="currentColor" />
    </g>
  </Icon>
)
