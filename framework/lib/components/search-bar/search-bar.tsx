import React, { forwardRef, useState } from 'react'
import {
  AsyncSelect,
  GroupBase,
  InputActionMeta,
  SelectInstance,
} from 'chakra-react-select'
import { filter, identity, is, test, toLower } from 'ramda'
import debounce from 'lodash.debounce'
import { searchBarStyles } from './styles'
import { useSelectCallbacks } from '../../hooks'
import { Box } from '../box'
import { SearchBarOptionType, SearchBarProps } from './types'
import { getComponents } from './get-components'

export const SearchBar = forwardRef(
  <T extends SearchBarOptionType>({
    defaultOptions = [],
    isMulti = false,
    customOption = null,
    customTag = null,
    sx = {},
    debouncedWaitTime = 300,
    debouncedOptions = {},
    loadOptions: getCustomOptions = null,
    clearInputOnSelect = true,
    closeMenuOnSelect = false,
    onChange = identity,
    onAdd = identity,
    onRemove = identity,
    'data-testid': testId,
    value,
    onSearchInputChange = identity,
    ...rest
  }: SearchBarProps<T>,
    ref: React.Ref<SelectInstance<T, boolean, GroupBase<T>>>
  ) => {
    const [ filtered, setFiltered ] = useState(defaultOptions)
    const [ filterInput, setFilterInput ] = useState('')
    const handleChange = useSelectCallbacks<T>({
      onChange,
      onAdd,
      onRemove,
      isMulti,
      value: is(Array, value) ? value as T[] : [],
    })
    const customComponents = getComponents<T>()

    const simpleFilter = (query: string) => (
      filter(
        (option: T) =>
          test(new RegExp(toLower(query), 'g'), toLower(option.label)),
        defaultOptions
      )
    )

    const getOptions = async (query: string) => {
      const newOptions = getCustomOptions
        ? await getCustomOptions(query)
        : simpleFilter(query)
      setFiltered(newOptions)

      return newOptions
    }

    const loadOptions = async (
      query: string,
      callback: (options: T[]) => void
    ) => {
      const newOptions = await getOptions(query)
      callback(newOptions)
      return []
    }

    const debouncedLoadOptions = debounce(
      loadOptions,
      debouncedWaitTime,
      debouncedOptions
    )

    const resetFiltered = (v: string, { action }: InputActionMeta) => {
      if (clearInputOnSelect || action !== 'set-value') {
        setFilterInput(v)
        onSearchInputChange(v)
        if (v === '') {
          setFiltered(defaultOptions)
        }
      }
    }

    return (
      <Box w="full" data-testid={ testId }>
        <AsyncSelect
          cacheOptions={ true }
          defaultOptions={ filtered }
          loadOptions={ debouncedLoadOptions }
          onChange={ handleChange }
          placeholder="Search ..."
          chakraStyles={ searchBarStyles(sx) }
          isMulti={ isMulti }
          useBasicStyles={ true }
          selectedOptionStyle="check"
          hideSelectedOptions={ false }
          closeMenuOnSelect={ closeMenuOnSelect }
          isClearable={ false }
          onInputChange={ resetFiltered }
          inputValue={ filterInput }
          customOption={ customOption }
          customTag={ customTag }
          components={ customComponents }
          ref={ ref }
          value={ value }
          { ...rest }
        />
      </Box>
    )
  }
)
