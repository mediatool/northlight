import React, { ComponentType } from 'react'
import {
  Icon as ChakraIcon,
  IconProps as ChakraIconProps,
} from '@chakra-ui/react'

type Props = ChakraIconProps & {
  as?: ComponentType<any>
}

export const Icon = ({
  as: As, ...rest
}: Props) => {
  const CustomIcon = As ?? (() => <ChakraIcon />)

  return (
    <ChakraIcon
      color={ rest.color ?? 'unset' }
      boxSize={ 5 }
      { ...rest }
    >
      <CustomIcon />
    </ChakraIcon>
  )
}
