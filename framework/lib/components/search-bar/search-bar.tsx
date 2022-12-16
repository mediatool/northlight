import React, { useState } from 'react'
import {
  AsyncSelect,
  DropdownIndicatorProps,
  GroupBase,
  InputActionMeta,
  MultiValueProps,
  OptionProps,
  chakraComponents,
} from 'chakra-react-select'
import { filter, identity, test, toLower } from 'ramda'
import { SearchDuo } from '@mediatool/icons'
import debounce from 'lodash.debounce'
import { searchBarStyles } from '../../theme/components'
import { Icon } from '../icon'
import { Label, P } from '../typography'
import { useSelectCallbacks } from '../../hooks'
import { Box } from '../box'
import { CustomElement, SearchBarOptionType, SearchBarProps } from './types'

declare module 'react-select/dist/declarations/src/Select' {

  // @ts-ignore
  export interface Props<
    Option,
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    _IsMulti extends boolean,
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    _Group extends GroupBase<Option>
  > {
    customOption: CustomElement
    customTag: CustomElement
  }
}

const components = {
  DropdownIndicator: (props: DropdownIndicatorProps) => (
    <chakraComponents.DropdownIndicator { ...props }>
      <Icon as={ SearchDuo } />
    </chakraComponents.DropdownIndicator>
  ),
  Option: (props: OptionProps<any>) => (
    <chakraComponents.Option { ...props }>
      { props.selectProps.customOption ? (
        props.selectProps.customOption(props.data)
      ) : (
        <P>{ props.data.label }</P>
      ) }
    </chakraComponents.Option>
  ),
  MultiValueContainer: (props: MultiValueProps<any>) => (
    <chakraComponents.MultiValueContainer { ...props }>
      { props.selectProps.customTag ? (
        props.selectProps.customTag(props.data)
      ) : (
        <Label>{ props.data.label }</Label>
      ) }
    </chakraComponents.MultiValueContainer>
  ),
}

export function SearchBar<T> ({
  defaultOptions = [],
  isMulti = false,
  customOption = null,
  customTag = null,
  sx = {},
  debouncedWaitTime = 300,
  debouncedOptions = {},
  loadOptions: getCustomOptions = null,
  clearInputOnSelect = false,
  closeMenuOnSelect = false,
  onChange = identity,
  onAdd = identity,
  onRemove = identity,
  'data-testid': testId,
  ...rest
}: SearchBarProps<T>) {
  const [ filtered, setFiltered ] = useState(defaultOptions)
  const [ filterInput, setFilterInput ] = useState('')
  const handleChange = useSelectCallbacks<T>({
    onChange,
    onAdd,
    onRemove,
    isMulti,
  })

  const simpleFilter = (query: string) =>
    filter(
      (option: SearchBarOptionType) =>
        test(new RegExp(toLower(query), 'g'), toLower(option.label)),
      defaultOptions
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
    callback: (options: SearchBarOptionType[]) => void
  ) => {
    const newOptions = await getOptions(query)
    callback(newOptions)
  }

  const debouncedLoadOptions = debounce(
    loadOptions,
    debouncedWaitTime,
    debouncedOptions
  )

  const resetFiltered = (v: string, { action }: InputActionMeta) => {
    if (clearInputOnSelect || action !== 'set-value') {
      setFilterInput(v)
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
        components={ components }
        { ...rest }
      />
    </Box>
  )
}
