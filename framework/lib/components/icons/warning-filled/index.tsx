import React from 'react'
import { IconProps as ChakraIconProps, Icon } from '@chakra-ui/react'
import { IconProps } from '../../../../lib/types'

type Props = ChakraIconProps & IconProps

export const WarningFilled = (props: Props) => (
  <Icon viewBox="0 0 32 32" { ...props }>
    <g
      fill="currentColor"
      stroke="none"
      strokeLinecap="square"
      strokeLinejoin="miter"
      strokeMiterlimit="10"
      strokeWidth={ 2 }
    >
      <path fill="currentColor" d="m31.637 27.223-12.95-25.52A3.174 3.174 0 0 0 17.563.458 2.91 2.91 0 0 0 16.003 0a2.91 2.91 0 0 0-1.561.458c-.472.3-.86.73-1.122 1.245L.369 27.223A3.373 3.373 0 0 0 0 28.828c.01.56.16 1.107.43 1.587.27.485.653.887 1.113 1.165.46.278.98.423 1.508.42h25.902a2.893 2.893 0 0 0 1.502-.42 3.14 3.14 0 0 0 1.112-1.155c.27-.482.42-1.03.431-1.591a3.417 3.417 0 0 0-.362-1.611Zm-13.786-16.56-.714 10.669h-2l-.714-10.668h3.428Zm-1.714 17.07a1.7 1.7 0 0 1-.988-.32 1.876 1.876 0 0 1-.655-.851 2.014 2.014 0 0 1-.101-1.096c.069-.368.238-.706.487-.971.248-.265.565-.446.91-.52a1.675 1.675 0 0 1 1.027.109c.325.143.603.386.798.698.196.312.3.679.3 1.054 0 .503-.187.986-.52 1.341a1.724 1.724 0 0 1-1.258.556Z" />
    </g>
  </Icon>
)
