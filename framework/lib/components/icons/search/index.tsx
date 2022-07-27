import React from 'react'
import { IconProps as ChakraIconProps, Icon } from '@chakra-ui/react'
import { IconProps } from '../../../types'

type Props = ChakraIconProps & IconProps

export const SearchIcon = (props: Props) => (
  <Icon viewBox="0 0 32 32" { ...props }>
    <g
      fill="currentColor"
      stroke="currentColor"
      strokeLinecap="square"
      strokeLinejoin="miter"
      strokeMiterlimit="10"
      strokeWidth={ 2 }
    >
      <line fill="none" x1="29" x2="24" y1="29" y2="24" />
      <path d="M6,13a7,7,0,0,1,7-7" fill="none" strokeLinecap="butt" />
      <circle cx="13" cy="13" fill="none" r="11" stroke="currentColor" />
    </g>
  </Icon>
)
