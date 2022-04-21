import React from 'react'
import { IconProps as ChakraIconProps, Icon } from '@chakra-ui/react'
import { IconProps } from '~lib/types'

type Props = ChakraIconProps & IconProps

export const PlugIcon = (props: Props) => (
  <Icon viewBox="0 0 32 32" { ...props }>
    <g
      fill="currentColor"
      stroke="currentColor"
      strokeLinecap="square"
      strokeLinejoin="miter"
      strokeMiterlimit="10"
      strokeWidth={ 2 }
    >
      <line fill="none" stroke="currentColor" x1="2" x2="6.001" y1="30" y2="25.999" />
      <line fill="none" stroke="currentColor" x1="14" x2="11" y1="14" y2="17" />
      <line fill="none" stroke="currentColor" x1="18" x2="15" y1="18" y2="21" />
      <line fill="none" x1="30" x2="25.999" y1="2" y2="6.001" />
      <path
        d="M8.169,14.169,6,16.336A6.833,6.833,0,0,0,15.664,26l2.167-2.168Z"
        fill="none"
        stroke="currentColor"
      />
      <path d="M23.831,17.831,26,15.664A6.833,6.833,0,0,0,16.336,6L14.169,8.169Z" fill="none" />
    </g>
  </Icon>
)
