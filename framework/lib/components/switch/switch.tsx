import React from 'react'
import { Switch as ChakraSwitch } from '@chakra-ui/react'
import { SwitchProps } from '../../types'

export const Switch = ({
  value,
  onChange,
  name,
  size = 'md',
  ...rest
}: SwitchProps) => (
  <ChakraSwitch
    size={ size }
    id={ name }
    isChecked={ value }
    onChange={ onChange }
    { ...rest }
  />
)
