import React, { useEffect, useRef, useState } from 'react'
import { Button, InputRightElement, useDisclosure } from '@chakra-ui/react'
import { is } from 'ramda'
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
  const [ inputValue, setInputValue ] = useState(valueProp?.input)
  const [ selectOption, setSelectOption ] = useState(valueProp?.option)
  const [ enableSelectInput, setEnableSelectInput ] = useState(false)

  const buttonRef = useRef<any>()
  const selectRef = useRef<any>()

  const getNewValue = (option?: ComboPickerOption, input?: number): ComboPickerValue => {
    const newValueOption = option ?? options[0]

    return (is(Number, input))
      ? { input: Number(input), option: newValueOption }
      : { option: newValueOption }
  }

  const handleInputChange = (newInputvalue?: number) => {
    const newValue = getNewValue(valueProp?.option, newInputvalue)

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
      onChange?.(getNewValue(selectedOption, valueProp?.input))

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
    const option = valueProp?.option ?? options[0]
    const input = defaultToZeroIfEmpty ? valueProp?.input ?? 0 : valueProp?.input

    setSelectOption(option)
    setInputValue(input)

    onChange?.(getNewValue(option, input))
  }, [ valueProp?.input, valueProp?.option, defaultToZeroIfEmpty, options ])

  const buttonWidth = (buttonRef.current?.offsetWidth ?? 0)

  return (
    <>
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
        pr={ `${buttonWidth >= 0 ? buttonWidth + 10 : 0}px` }
        inputRightElement={ (
          <InputRightElement
            width="auto"
            display="flex"
            justifyContent="flex-end"
            py={ 2 }
            mr={ 2 }
          >
            <Button
              ref={ buttonRef }
              isDisabled={ isDisabled }
              onClick={ handleSelectToggle }
              flexShrink="0"
              height="100%"
              data-testid="combo-picker-button"
            >
              { selectOption?.label ?? '' }
            </Button>
          </InputRightElement>
    ) }
      />
      {
        isOpen && (
          <Box position="absolute" width="100%" top={ 0 }>
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
        )
      }
    </>
  )
}
