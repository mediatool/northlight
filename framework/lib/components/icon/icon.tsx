import React, { ComponentType } from 'react'
import {
  Icon as ChakraIcon,
  IconProps as ChakraIconProps,
  forwardRef,
} from '@chakra-ui/react'

type Props = ChakraIconProps & {
  as?: ComponentType<any>
}

export const Icon = forwardRef(({
  as: As, ...rest
}: Props, ref: any) => {
  const CustomIcon = As ?? (() => <ChakraIcon />)

  return (
    <ChakraIcon
      ref={ ref }
      color={ rest.color ?? 'unset' }
      boxSize={ 5 }
      { ...rest }
    >
      <CustomIcon />
    </ChakraIcon>
  )
})
