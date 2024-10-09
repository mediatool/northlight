import React, { useEffect, useRef, useState } from 'react'
import { Button, InputGroup, InputRightElement, useDisclosure } from '@chakra-ui/react'
import { is } from 'ramda'
import { ComboPickerOption, ComboPickerProps, ComboPickerValue } from './types'
import { Select, SingleValue } from '../select'
import { Box } from '../box'
import { FormattedNumberInput } from '../text-field'
import { clamp } from '../../utils'

/**
 * @see ComboPickerField
 * @see {@link https://northlight.dev/reference/combo-picker}
 */
export const ComboPicker = ({
  onChange,
  options,
  size,
  value: valueProp,
  placeholder,
  precision,
  formatPreset,
  isDisabled,
  isReadOnly,
  defaultToZeroIfEmpty = true,
  max = Infinity,
  min = -Infinity,
  ...rest
}: ComboPickerProps) => {
  const { isOpen, onToggle, onClose } = useDisclosure()
  const [ inputValueState, setInputValueState ] = useState(valueProp?.input)
  const [ selectOptionState, setselectOptionState ] = useState(valueProp?.option ?? options[0])
  const [ enableSelectInput, setEnableSelectInput ] = useState(false)

  const isInputValueControlled = typeof valueProp?.input !== 'undefined'
  const inputValue = isInputValueControlled ? valueProp.input : inputValueState

  const isOptionControlled = typeof valueProp?.option !== 'undefined'
  const selectOption = isOptionControlled ? valueProp.option : selectOptionState

  const buttonRef = useRef<any>()
  const selectRef = useRef<any>()

  const getNewValue = (option: ComboPickerOption, input?: number): ComboPickerValue => (
    (is(Number, input))
      ? { input: Number(input), option }
      : { option })

  const handleInputChange = (newInputvalue?: number) => {
    const newValue = getNewValue(selectOption, newInputvalue)

    setInputValueState(newValue.input)
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
      setselectOptionState(selectedOption)
      onChange?.(getNewValue(selectedOption, inputValue))

      if (isOpen) {
        handleSelectClose()
      }
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

  useEffect(() => {
    if (!is(Number, inputValue) && defaultToZeroIfEmpty) {
      handleInputChange(clamp(min, max, 0))
    }
  }, [ valueProp?.input ])

  return (
    <InputGroup>
      <FormattedNumberInput
        width="100%"
        onChange={ (values) => handleInputChange(values.floatValue) }
        value={ inputValue }
        placeholder={ placeholder }
        size={ size }
        numberOfDecimals={ precision }
        preset={ formatPreset }
        disabled={ isDisabled }
        readOnly={ isReadOnly }
        min={ min }
        max={ max }
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
