import React, { FunctionComponent, useMemo, useRef } from 'react'
import {
  Select as ChakraReactSelect,
  GroupBase,
  OptionsOrGroups,
} from 'chakra-react-select'
import { Box } from '@chakra-ui/react'
import { equals, identity, is } from 'ramda'
import { Option, SelectProps } from './types'
import { customSelectStyles } from '../../theme/components/select/custom-select'
import { useSelectCallbacks } from '../../hooks'

export function Select<T extends Option> ({
  options,
  isMulti = false,
  onChange = identity,
  onAdd = identity,
  onRemove = identity,
  isLoading,
  loadingList = () => null,
  'data-testid': testId,
  value,
  ...rest
}: SelectProps<T>) {
  const CustomSelect = ChakraReactSelect as FunctionComponent<SelectProps<T>>
  const handleChange = useSelectCallbacks<T>({
    onChange,
    onAdd,
    onRemove,
    isMulti,
    value: is(Array, value) ? value as T[] : [],
  })

  const prevOptions =
    useRef<OptionsOrGroups<T, GroupBase<T>> | undefined>(options)
  const renderedOptions = useMemo(() => {
    if (!equals(prevOptions.current, options)) {
      prevOptions.current = options
    }
    return prevOptions.current
  }, [ options ])

  return (
    <Box w="full" data-testid={ testId }>
      <CustomSelect
        isMulti={ isMulti }
        options={ renderedOptions }
        useBasicStyles={ true }
        closeMenuOnSelect={ !isMulti }
        hideSelectedOptions={ false }
        isClearable={ false }
        onChange={ handleChange }
        selectedOptionStyle="check"
        chakraStyles={ customSelectStyles }
        isLoading={ isLoading }
        { ...(isLoading && { components: { MenuList: loadingList } }) }
        value={ value }
        { ...rest }
      />
    </Box>
  )
}
