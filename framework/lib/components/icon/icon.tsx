import React from 'react'
import {
  Icon as ChakraIcon,
  forwardRef,
  useStyleConfig,
} from '@chakra-ui/react'
import { IconProps } from './types'

export const Icon = forwardRef(({
  as: As,
  size,
  color,
  boxSize,
  ...rest
}: IconProps, ref: any) => {
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
