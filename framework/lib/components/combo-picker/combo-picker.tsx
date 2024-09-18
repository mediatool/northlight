import React, { useState } from 'react'
import { Box, Button, InputGroup, InputRightElement, NumberInputField, useDisclosure } from '@chakra-ui/react'
import { ComboPickerProps } from './types'
import { Select } from '../select'
import { NumberInput } from '../number-input'

/**
 * @see ComboPicker
 * @see {@link https://northlight.dev/reference/combo-picker}
 */
export const ComboPicker = ({
  onChange,
  options,
  size,
  value,
  placeholder,
  isDisabled,
  ...rest
}: ComboPickerProps) => {
  const { isOpen, onToggle, onClose } = useDisclosure()
  const [ inputValue, setInputValue ] = useState(value ? value.input : 0)
  const [ selectOption, setSelectOption ] = useState(value ? value.option : options[0])

  const handleInputChange = (newInputvalue: String) => {
    setInputValue(Number(newInputvalue))
    onChange?.({
      input: inputValue, option: selectOption,
    })
  }

  const handleSelectChange = (selectedOption: any) => {
    if (selectedOption) {
      setSelectOption(selectedOption)
      onChange?.({
        input: inputValue, option: selectOption,
      })

      onClose()
    }
  }

  return (
    <InputGroup size={ size }>
      <NumberInput
        style={ { width: ' 100%', overflow: 'hidden' } }
        onChange={ handleInputChange }
        defaultValue={ inputValue }
        placeholder={ placeholder }
        isDisabled={ isDisabled }
        { ...rest }
      >
        <NumberInputField />
      </NumberInput>
      <InputRightElement
        style={ { width: 'auto', padding: '0.4rem', display: 'flex', justifyContent: 'flex-end' } }
      >
        <Button
          isDisabled={ isDisabled }
          onBlur={ onClose }
          onClick={ onToggle }
          style={ { flexShrink: '0', height: '100%' } }
        >
          { selectOption.label }
        </Button>
      </InputRightElement>
      <Box style={ { position: 'absolute', width: '100%' } }>
        <Select
          chakraStyles={ { container: (provided) => ({
            ...provided,
            position: 'absolute',
            visibility: 'hidden',
            right: '0',
          }),
          input: (provided) => ({
            ...provided,
            display: 'none',
          }),
          menu: (provided) => ({
            ...provided,
            width: 'auto',
            right: '0',
          }) } }
          options={ options }
          value={ selectOption ? selectOption.value : undefined }
          onChange={ handleSelectChange }
          menuIsOpen={ isOpen }
        />
      </Box>
    </InputGroup>
  )
}
