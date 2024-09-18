import React, { useEffect, useRef, useState } from 'react'
import { Button, InputGroup, InputRightElement, NumberInputField, useDisclosure } from '@chakra-ui/react'
import { ComboPickerOption, ComboPickerProps } from './types'
import { Select, SingleValue } from '../select'
import { NumberInput } from '../number-input'
import { Box } from '../box'

/**
 * @see ComboPickerField
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
  const [ enableSelectInput, setEnableSelectInput ] = useState(false)

  const buttonRef = useRef<any>()
  const selectRef = useRef<any>()

  const handleInputChange = (newInputvalue: string) => {
    setInputValue(Number(newInputvalue))
    onChange?.({
      input: Number(newInputvalue), option: selectOption,
    })
  }

  const handleSelectClose = () => {
    if (buttonRef.current) {
      buttonRef.current.focus()
      setEnableSelectInput(false)
    }

    onClose()
  }

  const handleSelectChange = (selectedOption: SingleValue<ComboPickerOption>) => {
    if (selectedOption) {
      setSelectOption(selectedOption)
      onChange?.({
        input: inputValue, option: selectedOption,
      })

      handleSelectClose()
    }
  }

  const handleSelectToggle = () => {
    if (!isOpen) {
      setEnableSelectInput(true)
    }

    onToggle()
  }

  useEffect(() => {
    if (enableSelectInput) {
      selectRef.current.focus()
    }
  }, [ enableSelectInput ])

  return (
    <InputGroup size={ size }>
      <NumberInput
        width="100%"
        overflow="hidden"
        onChange={ handleInputChange }
        defaultValue={ inputValue }
        placeholder={ placeholder }
        isDisabled={ isDisabled }
        { ...rest }
      >
        <NumberInputField />
      </NumberInput>
      <InputRightElement
        width="auto"
        display="flex"
        justifyContent="flex-end"
        padding={ 2 }
      >
        <Button
          ref={ buttonRef }
          isDisabled={ isDisabled }
          onClick={ handleSelectToggle }
          flexShrink="0"
          height="100%"
        >
          { selectOption.label }
        </Button>
      </InputRightElement>
      <Box position="absolute" width="100%">
        <Select
          ref={ selectRef }
          chakraStyles={ { container: (provided) => ({
            ...provided,
            position: 'absolute',
            visibility: 'hidden',
            right: '0',
          }),
          input: (provided) => ({
            ...provided,
            pointerEvents: 'none',
            color: 'transparent',
            display: enableSelectInput ? 'block' : 'none',
          }),
          menu: (provided) => ({
            ...provided,
            width: 'auto',
            right: '0',
          }) } }
          options={ options }
          value={ selectOption ? selectOption.value : undefined }
          onChange={ handleSelectChange }
          onBlur={ handleSelectClose }
          menuIsOpen={ isOpen }
        />
      </Box>
    </InputGroup>
  )
}
