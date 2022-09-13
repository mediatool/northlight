import React, { FunctionComponent } from 'react'
import { Select as ChakraReactSelect } from 'chakra-react-select'
import { SelectProps } from '../../types'
import { customSelectStyles } from '../../theme/components/select/custom-select'

export function Select<T> ({
  options,
  isMulti = false,
  onChange,
  isLoading,
  loadingList = () => null,
  ...rest
}:SelectProps<T>) {
  const CustomSelect = ChakraReactSelect as FunctionComponent<SelectProps<T>>
  return (
    <CustomSelect
      isMulti={ isMulti }
      options={ options }
      useBasicStyles={ true }
      closeMenuOnSelect={ !isMulti }
      hideSelectedOptions={ false }
      isClearable={ true }
      onChange={ onChange }
      selectedOptionStyle="check"
      chakraStyles={ customSelectStyles }
      isLoading={ isLoading }
      { ...(isLoading && { components: { MenuList: loadingList } }) }
      { ...rest }
    />
  )
}
