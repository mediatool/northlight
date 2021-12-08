import React from 'react'
import InputMask from 'react-input-mask'
import { PlainTextInputProps } from './types'
import { PlainTextInput } from './plain-text-input'

export const MaskedTextInput = ({
  mask,
  maskPlaceholder,
  alwaysShowMask,
  name,
  value,
  placeholder,
  onChange,
  onBlur,
  ...rest
}: PlainTextInputProps) => (
  <InputMask
    mask={ mask }
    maskPlaceholder={ maskPlaceholder }
    alwaysShowMask={ alwaysShowMask }
    name={ name }
    value={ value }
    onChange={ onChange }
    onBlur={ onBlur }
  >
    { ({ name: nameProp }: any) => (
      <PlainTextInput
        placeholder={ maskPlaceholder ?? placeholder }
        name={ nameProp }
        { ...rest }
      />
    ) }
  </InputMask>
)
