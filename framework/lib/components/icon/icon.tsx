import React, { ComponentType } from 'react'
import {
  Icon as ChakraIcon,
  IconProps as ChakraIconProps,
  forwardRef,
  useStyleConfig,
} from '@chakra-ui/react'

type Props = ChakraIconProps & {
  as?: ComponentType<any>
  size?: 'xs' | 'sm' | 'md' | 'lg'
}

export const Icon = forwardRef(({
  as: As,
  size,
  color,
  boxSize,
  ...rest
}: Props, ref: any) => {
  const CustomIcon = As ?? (() => <ChakraIcon />)
  const styles = useStyleConfig('Icon', { size, color, boxSize })

  return (
    <ChakraIcon
      ref={ ref }
      sx={ styles }
      { ...rest }
    >
      <CustomIcon />
    </ChakraIcon>
  )
})
