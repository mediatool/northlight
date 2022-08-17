import React from 'react'
import InputMask from 'react-input-mask'
import { Input } from '../input'
import { MaskedTextInputProps } from './types'

//! Overload error in @types/react-input-mask, overwriting faulty types as unknown as any
const CustomInput = InputMask as unknown as any

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
  <CustomInput
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
  </CustomInput>
)
