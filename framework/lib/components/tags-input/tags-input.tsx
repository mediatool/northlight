import React, {
  FunctionComponent,
  KeyboardEvent,
  useEffect,
  useState,
} from 'react'
import {
  ActionMeta,
  CreatableSelect,
  MultiValue,
} from 'chakra-react-select'
import { any, identity, isEmpty } from 'ramda'
import { Box } from '../box'
import { useToken } from '../../hooks'
import { TagsInputProps } from './types'
import { Option } from '../select'
import { tagsInputStyles } from './tags-input-styles'
import { theme } from '../../theme'
/**
 * Tags Input, based of react creatable select, is meant to select
 * multiple tags. Follows styling of textarea and is resizable.
 *
 * @see {@link https://northlight.dev/reference/tags-input}
 * @example (Example)
 * ## Simple
 * (?
 * <TagsInput />
 * ?)
 *
 * @example (Example)
 * ## With suggestions
 * (?
 * <TagsInput options={[{ label: 'Option 1', value: '1' }, { label: 'Option 2', value: '2' }]}/>
 * ?)
 *
 */
export function TagsInput<T extends Option> ({
  options,
  onChange = identity,
  isLoading,
  loadingList = () => null,
  'data-testid': testId,
  value = [],
  onError,
  ...rest
}: TagsInputProps<T>) {
  const [ borderColor ] = useToken('border.select', [ 'focus' ])
  const [ menuIsOpen, setMenuIsOpen ] = useState(false)
  const [ inputValue, setInputValue ] = useState('')
  const [ selectedOptions, setSelectedOptions ] = useState<MultiValue<T>>(value)
  const [ isFocused, setIsFocused ] = useState(false)

  useEffect(() => {
    setSelectedOptions(value)
  }, [ value.length ])

  const CustomSelect = CreatableSelect as FunctionComponent<TagsInputProps<T>>

  const handleChange = (values: MultiValue<T>, actionMeta: ActionMeta<T>) => {
    setSelectedOptions(values)
    onChange(values, actionMeta)
  }

  const isValidNewOption = (input: string, availableOptions: MultiValue<T>) => !any(
    (option) => option.value === input,
    availableOptions
  )

  const addNewOption = (newOption: T) => {
    const updatedOptions = [ ...selectedOptions, newOption ]
    onChange(updatedOptions, { action: 'select-option', option: newOption })
    setSelectedOptions(updatedOptions)
  }

  const clearInput = () => {
    setInputValue('')
  }

  const handleInputChange = (newInput: string) => {
    if (newInput === ',') return

    setInputValue(newInput)
  }

  const handleKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
    const shouldAddOption = event.key === 'Enter' || event.key === 'Tab' || event.key === ','

    if (!shouldAddOption || isEmpty(inputValue)) return

    const trimmedInputValue = inputValue.trim()

    if (isValidNewOption(trimmedInputValue, selectedOptions)) {
      const newOption: Option = { value: trimmedInputValue, label: trimmedInputValue }
      addNewOption(newOption as T)
    } else {
      onError?.('Tag already exists')
    }

    clearInput()
  }

  const handleFocus = () => {
    setIsFocused(true)
    if (options && options.length > 0) {
      setMenuIsOpen(true)
    }
  }

  return (
    <Box w="full" data-testid={ testId }>
      <CustomSelect
        isMulti={ true }
        menuPortalTarget={ document.body }
        placeholder="Type something and press Enter or comma..."
        options={ options }
        useBasicStyles={ true }
        closeMenuOnSelect={ false }
        hideSelectedOptions={ false }
        isClearable={ false }
        onChange={ handleChange }
        onInputChange={ handleInputChange }
        onKeyDown={ handleKeyDown }
        inputValue={ inputValue }
        selectedOptionStyle="check"
        chakraStyles={ tagsInputStyles(isFocused, borderColor) }
        onFocus={ handleFocus }
        isValidNewOption={ isValidNewOption }
        onBlur={ () => {
          setMenuIsOpen(false)
          setIsFocused(false)
        } }
        menuIsOpen={ menuIsOpen }
        isLoading={ isLoading }
        { ...(isLoading && { components: { MenuList: loadingList } }) }
        value={ selectedOptions }
        components={ {
          DropdownIndicator: () => null,
        } }
        styles={ { menuPortal: (base) => ({ ...base, zIndex: theme.zIndices.popover }) } }
        formatCreateLabel={ (textInputValue: string) =>
          `Add tag "${textInputValue}"`
          }
        { ...rest }
      />
    </Box>
  )
}
