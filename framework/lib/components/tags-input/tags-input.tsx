import React, {
  FunctionComponent,
  KeyboardEvent,
  useEffect,
  useState,
} from 'react'
import {
  ActionMeta,
  CreatableSelect,
  InputActionMeta,
  MultiValue,
} from 'chakra-react-select'
import { any, append, identity, init, isEmpty } from 'ramda'
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

  const isValidNewOption = (input: string, availableOptions: MultiValue<T>) => {
    const optionAlreadyExists = any(
      (option) => option.value === input,
      availableOptions
    )
    return !isEmpty(input) && !optionAlreadyExists
  }

  const addNewOption = (newOption: T) => {
    onChange(selectedOptions, { action: 'select-option', option: newOption })
    setSelectedOptions(append(newOption))
  }

  const isInputChangeValid = (newInput: string, event: InputActionMeta) =>
    isValidNewOption(newInput, selectedOptions) &&
    newInput !== '' &&
    newInput !== ',' &&
    newInput.endsWith(',') &&
    event.action !== 'input-blur'

  const clearInput = () => {
    setInputValue('')
  }

  const handleInputChange = (newInput: string, event: InputActionMeta) => {
    setInputValue(newInput)
    if (!isInputChangeValid(newInput, event)) return
    const newOption: Option = {
      value: init(newInput),
      label: init(newInput).slice(0, -1),
    }
    addNewOption(newOption as T)
    clearInput()
  }

  const handleKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
    if (
      !isValidNewOption(inputValue, selectedOptions) &&
      !isEmpty(inputValue) &&
      event.key !== ' '
    ) {
      clearInput()
      event.preventDefault()
      return
    }
    if ((event.key === 'Enter' || event.key === 'Tab') && !isEmpty(inputValue)) {
      const newOption: Option = { value: inputValue, label: inputValue }
      addNewOption(newOption as T)
      clearInput()
      event.preventDefault()
    }
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
