import React from 'react'
import { IconProps as ChakraIconProps, Icon } from '@chakra-ui/react'
import { IconProps } from '../../../types'

type Props = ChakraIconProps & IconProps

export const HourGlassIcon = (props: Props) => (
  <Icon viewBox="0 0 32 32" { ...props }>
    <g
      fill="currentColor"
      stroke="currentColor"
      strokeLinecap="square"
      strokeLinejoin="miter"
      strokeMiterlimit="10"
      strokeWidth={ 2 }
    >
      <path fill="none" d="M5 2h22M5 30h22" />
      <path fill="none" d="M25 2v4.279a6 6 0 0 1-.912 3.18L20 16l4.088 6.541a6 6 0 0 1 .912 3.18V30M7 30v-4.279a6 6 0 0 1 .912-3.18L12 16 7.912 9.459A6 6 0 0 1 7 6.279V2" />
      <path fill="currentColor" d="M11 26v-.28a2 2 0 0 1 .3-1.058l3.852-6.162a1 1 0 0 1 1.7 0l3.848 6.16a2 2 0 0 1 .3 1.06V26H11Z" />
    </g>
  </Icon>
)
