import React from 'react'
import { IconProps as ChakraIconProps, Icon } from '@chakra-ui/react'
import { IconProps } from '../../../types'

type Props = ChakraIconProps & IconProps

export const FolderOpenIcon = (props: Props) => (
  <Icon viewBox="0 0 32 32" { ...props }>
    <g
      fill="currentColor"
      stroke="currentColor"
      strokeLinecap="square"
      strokeLinejoin="miter"
      strokeMiterlimit="10"
      strokeWidth={ 2 }
    >
      <path fill="none" d="M5 8V2h6l3 3h13v3M27 29H5L2 12h28l-3 17Z" />
    </g>
  </Icon>
)
