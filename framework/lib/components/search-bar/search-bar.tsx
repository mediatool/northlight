import React, { forwardRef, useMemo, useState } from 'react'
import {
  AsyncSelect,
  GroupBase,
  InputActionMeta,
  SelectInstance,
} from 'chakra-react-select'
import { filter, identity, is, test, toLower } from 'ramda'
import { SearchDuo } from '@northlight/icons'
import { createDebounceFunctionInstance } from '../../utils'
import { searchBarStyles } from './styles'
import { useSelectCallbacks } from '../../hooks'
import { Box } from '../box'
import { SearchBarOptionType, SearchBarProps } from './types'
import { getComponents } from './get-components'

export const SearchBar = forwardRef(
  <T extends SearchBarOptionType, K extends boolean = false>({
    defaultOptions = [],
    isMulti,
    customOption = null,
    customTag = null,
    sx = {},
    debouncedWaitTime = 200,
    loadOptions: getCustomOptions = null,
    clearInputOnSelect = true,
    closeMenuOnSelect = false,
    onChange = identity,
    onAdd = identity,
    onRemove = identity,
    'data-testid': testId,
    value,
    onSearchInputChange = identity,
    icon = SearchDuo,
    ...rest
  }: SearchBarProps<T, K>,
    ref: React.Ref<SelectInstance<T, K, GroupBase<T>>>
  ) => {
    const [ filtered, setFiltered ] = useState(defaultOptions)
    const [ filterInput, setFilterInput ] = useState('')
    const debounceFunction = useMemo(
      () => createDebounceFunctionInstance(debouncedWaitTime),
      [ debouncedWaitTime ]
    )
    const handleChange = useSelectCallbacks<T, K>({
      onChange,
      onAdd,
      onRemove,
      isMulti,
      value: is(Array, value) ? value as T[] : [],
    })

    const customComponents = useMemo(
      () => getComponents<T>(),
      []
    )

    const simpleFilter = (query: string) => {
      if (typeof defaultOptions === 'boolean') return []
      return filter(
        (option: T) =>
          test(new RegExp(toLower(query), 'g'), toLower(option.label)),
        defaultOptions
      )
    }
    const getOptions = async (query: string) => {
      const newOptions = getCustomOptions
        ? await getCustomOptions(query)
        : simpleFilter(query)
      setFiltered((prev) => {
        // If default value is a boolean we want default value to persist to it's initial value
        // this is to allow pre-fetching of values on first render
        if (typeof prev === 'boolean') return prev
        return newOptions
      })

      return newOptions
    }

    const loadOptions = debounceFunction(async (
      query: string,
      callback: (options: T[]) => void
    ) => {
      const newOptions = await getOptions(query)
      callback(newOptions)
      return []
    })

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
        <AsyncSelect<T, K>
          cacheOptions={ true }
          defaultOptions={ filtered }
          loadOptions={ loadOptions }
          onChange={ handleChange }
          placeholder="Search..."
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
          icon={ icon }
          components={ customComponents }
          ref={ ref }
          value={ value }
          { ...rest }
        />
      </Box>
    )
  }
)
