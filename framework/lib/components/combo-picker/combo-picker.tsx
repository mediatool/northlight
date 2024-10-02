import React, { useEffect, useRef, useState } from 'react'
import { Button, InputGroup, InputRightElement, useDisclosure } from '@chakra-ui/react'
import { NumberFormatValues } from 'react-number-format'
import { ComboPickerOption, ComboPickerProps, ComboPickerValue } from './types'
import { Select, SingleValue } from '../select'
import { Box } from '../box'
import { FormattedNumberInput } from '../text-field'

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
  precision,
  formatPreset,
  isDisabled,
  isReadOnly,
  ...rest
}: ComboPickerProps) => {
  const { isOpen, onToggle, onClose } = useDisclosure()
  const [ inputValue, setInputValue ] = useState(value?.input)
  const [ selectOption, setSelectOption ] = useState(value?.option ?? options[0])
  const [ enableSelectInput, setEnableSelectInput ] = useState(false)

  const buttonRef = useRef<any>()
  const selectRef = useRef<any>()

  const getNewValue = (option: ComboPickerOption, input?: number): ComboPickerValue => ((input)
    ? { input: Number(input), option }
    : { option })

  const handleInputChange = (newInputvalue: NumberFormatValues) => {
    const newValue = getNewValue(selectOption, newInputvalue.floatValue)

    setInputValue(newValue.input)
    onChange?.(newValue)
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
      onChange?.(getNewValue(selectedOption, inputValue))

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
    <InputGroup>
      <FormattedNumberInput
        width="100%"
        onChange={ handleInputChange }
        defaultValue={ inputValue }
        placeholder={ placeholder }
        size={ size }
        numberOfDecimals={ precision }
        preset={ formatPreset }
        disabled={ isDisabled }
        readOnly={ isReadOnly }
        { ...rest }
      />
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
