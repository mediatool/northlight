import React from 'react'
import { IconProps as ChakraIconProps, Icon } from '@chakra-ui/react'
import { IconProps } from '../../../types'

type Props = ChakraIconProps & IconProps

export const RefreshIcon = (props: Props) => (
  <Icon viewBox="0 0 32 32" { ...props }>
    <g
      fill="currentColor"
      stroke="currentColor"
      strokeLinecap="square"
      strokeLinejoin="miter"
      strokeMiterlimit="10"
      strokeWidth={ 2 }
    >
      <path fill="none" d="M2.933 13.333C4.17 7.247 9.55 2.667 16 2.667c3.635 0 6.93 1.454 9.336 3.813" />
      <path fill="none" d="M21.333 9.333 28 2.667l1.333 8-8-1.334Z" />
      <path fill="currentColor" d="M21.333 9.333 28 2.667l1.333 8-8-1.334Z" />
      <path fill="none" d="M29.067 18.667C27.83 24.752 22.45 29.333 16 29.333c-3.635 0-6.93-1.454-9.336-3.813" />
      <path fill="none" d="M10.667 22.667 4 29.333l-1.333-8 8 1.334Z" />
      <path fill="currentColor" d="M10.667 22.667 4 29.333l-1.333-8 8 1.334Z" />
    </g>
  </Icon>
)
