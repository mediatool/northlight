import React, { FunctionComponent } from 'react'
import { Select as ChakraReactSelect } from 'chakra-react-select'
import { Box } from '@chakra-ui/react'
import { SelectProps } from '../../types'
import { customSelectStyles } from '../../theme/components/select/custom-select'

export function Select<T> ({
  options,
  isMulti = false,
  onChange,
  isLoading,
  loadingList = () => null,
  'data-testid': testId,
  ...rest
}: SelectProps<T>) {
  const CustomSelect = ChakraReactSelect as FunctionComponent<SelectProps<T>>
  return (
    <Box w="full" data-testid={ testId }>
      <CustomSelect
        isMulti={ isMulti }
        options={ options }
        useBasicStyles={ true }
        closeMenuOnSelect={ !isMulti }
        hideSelectedOptions={ false }
        isClearable={ false }
        onChange={ onChange }
        selectedOptionStyle="check"
        chakraStyles={ customSelectStyles }
        isLoading={ isLoading }
        { ...(isLoading && { components: { MenuList: loadingList } }) }
        { ...rest }
      />
    </Box>

  )
}
