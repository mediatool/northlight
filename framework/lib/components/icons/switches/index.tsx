import React from 'react'
import { IconProps as ChakraIconProps, Icon } from '@chakra-ui/react'
import { IconProps } from '../../../../lib/types'

type Props = ChakraIconProps & IconProps

export const SwitchesIcon = (props: Props) => (
  <Icon viewBox="0 0 32 32" { ...props }>
    <g fill="currentColor">
      <path
        d="M23.5,0H8.5A7.555,7.555,0,0,0,1,7.5,7.555,7.555,0,0,0,8.5,15h15A7.555,7.555,0,0,0,31,7.5,7.555,7.555,0,0,0,23.5,0ZM8.5,13A5.5,5.5,0,1,1,14,7.5,5.477,5.477,0,0,1,8.5,13Z"
        fill="currentColor"
      />
      <path d="M23.5,17H8.5a7.5,7.5,0,0,0,0,15h15a7.5,7.5,0,0,0,0-15Zm0,13A5.5,5.5,0,1,1,29,24.5,5.477,5.477,0,0,1,23.5,30Z" />
    </g>
  </Icon>
)
