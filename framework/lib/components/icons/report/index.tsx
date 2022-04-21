import React from 'react'
import { IconProps as ChakraIconProps, Icon } from '@chakra-ui/react'
import { IconProps } from '~lib/types'

type Props = ChakraIconProps & IconProps

export const ReportIcon = (props: Props) => (
  <Icon viewBox="0 0 32 32" { ...props }>
    <g
      fill="currentColor"
      stroke="currentColor"
      strokeLinecap="square"
      strokeLinejoin="miter"
      strokeMiterlimit="10"
      strokeWidth={ 2 }
    >
      <path fill="none" d="m22 10-6 6-4-4-3 3" />
      <path d="M18 10h4v4M16 24v6" />
      <path d="m13 24-6 7M19 24l6 7" />
      <path fill="none" d="M28 20V4H4v16M31 24H1M16 4V1" />
    </g>
  </Icon>
)
