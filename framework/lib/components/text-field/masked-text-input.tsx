import React from 'react'
import InputMask from 'react-input-mask'
import { Input } from '@chakra-ui/react'
import { MaskedTextInputProps } from './types'

export const MaskedTextInput = ({
  mask,
  maskPlaceholder,
  alwaysShowMask,
  name,
  value,
  placeholder,
  field,
  onChange,
  onBlur,
  ...rest
}: MaskedTextInputProps) => (
  <InputMask
    mask={ mask }
    maskPlaceholder={ maskPlaceholder }
    alwaysShowMask={ alwaysShowMask }
    name={ field?.name ?? name }
    value={ field?.value ?? value }
    onChange={ field?.onChange ?? onChange }
    onBlur={ onBlur }
  >
    { ({ name: nameProp }: any) => (
      <Input
        placeholder={ maskPlaceholder ?? placeholder }
        name={ nameProp }
        { ...rest }
      />
    ) }
  </InputMask>
)
