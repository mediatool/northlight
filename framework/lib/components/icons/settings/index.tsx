import React from 'react'
import { IconProps as ChakraIconProps, Icon } from '@chakra-ui/react'
import { IconProps } from '../../../../lib/types'

type Props = ChakraIconProps & IconProps

export const SettingsIcon = (props: Props) => (
  <Icon viewBox="0 0 32 32" { ...props }>
    <g
      fill="currentColor"
      stroke="currentColor"
      strokeLinecap="square"
      strokeLinejoin="miter"
      strokeMiterlimit="10"
      strokeWidth={ 2 }
    >
      <path fill="none" d="M16 20a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z" />
      <path fill="none" d="M27 16c0-.73-.073-1.459-.217-2.175L30.49 11.1l-3-5.2-4.227 1.854a10.955 10.955 0 0 0-3.754-2.172L19 1h-6l-.509 4.582a10.955 10.955 0 0 0-3.754 2.172L4.51 5.9l-3 5.2 3.707 2.727a11.01 11.01 0 0 0 0 4.35L1.51 20.9l3 5.2 4.227-1.852a10.956 10.956 0 0 0 3.754 2.172L13 31h6l.509-4.582a10.956 10.956 0 0 0 3.754-2.172L27.49 26.1l3-5.2-3.707-2.727A11.05 11.05 0 0 0 27 16v0Z" />
    </g>
  </Icon>
)
