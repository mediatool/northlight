import React, { FunctionComponent, useRef } from 'react'
import { Select as ChakraReactSelect } from 'chakra-react-select'
import { Box } from '@chakra-ui/react'
import { difference, identity, length } from 'ramda'
import { SelectProps } from './types'
import { customSelectStyles } from '../../theme/components/select/custom-select'

export function Select<T> ({
  options,
  isMulti = false,
  onChange = identity,
  onAdd = identity,
  onRemove = identity,
  isLoading,
  loadingList = () => null,
  'data-testid': testId,
  ...rest
}: SelectProps<T>) {
  const CustomSelect = ChakraReactSelect as FunctionComponent<SelectProps<T>>

  const itemsArr = useRef<any[]>([])

  const handleChange = (val: any) => {
    onChange(val)
    if (!isMulti) {
      onAdd((val).value)
    } else if (val.length > itemsArr.current.length) {
      onAdd(val[length(val) - 1].value)
    } else {
      const removedItem = difference(itemsArr.current, val)[0].value
      onRemove(removedItem)
    }
    itemsArr.current = val
  }

  return (
    <Box w="full" data-testid={ testId }>
      <CustomSelect
        isMulti={ isMulti }
        options={ options }
        useBasicStyles={ true }
        closeMenuOnSelect={ !isMulti }
        hideSelectedOptions={ false }
        isClearable={ false }
        onChange={ handleChange }
        selectedOptionStyle="check"
        chakraStyles={ customSelectStyles }
        isLoading={ isLoading }
        { ...(isLoading && { components: { MenuList: loadingList } }) }
        { ...rest }
      />
    </Box>

  )
}
