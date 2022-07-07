import React from 'react'
import { Select as ChakraReactSelect } from 'chakra-react-select'
import { SelectProps } from '../../../lib/types'
import { customSelectStyles } from '../../../lib/theme/components/select/custom-select'

export const Select = ({
  options,
  isMulti = false,
  onChange,
  ...rest
}:SelectProps) => (
  <ChakraReactSelect
    isMulti={ isMulti }
    options={ options }
    useBasicStyles={ true }
    closeMenuOnSelect={ !isMulti }
    hideSelectedOptions={ false }
    isClearable={ true }
    onChange={ onChange }
    selectedOptionStyle="check"
    chakraStyles={ customSelectStyles }
    { ...rest }
  />
)
