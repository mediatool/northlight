import React, { ChangeEvent } from 'react'
import {
  NumberInput as ChakraNumberInput,
  NumberInputField,
} from '@chakra-ui/react'
import { defaultTo, identity, path } from 'ramda'
import { NumberInputStepper } from './number-input-stepper'
import { NumberInputProps } from './types'
import { advancedParseFloat } from './advanced-parse-float'

/**
 * Basic accessible input that only allows numbers, with support for arrow keys,
 *  min max values and percentages
 *
 * @example
 * (?
 * <Box p="3">
 * <NumberInput max={100} min={0} step={3} onlyAcceptPercentage={true} enableStepperArrows={true}/>
 * </Box>
 * ?)
 *
 */
export const NumberInput = ({
  variant = 'default',
  size = 'md',
  onChange = identity,
  onInputChange = identity,
  enableStepperArrows = false,
  name,
  onlyAcceptPercentage = false,
  ...rest
}: NumberInputProps) => {
  const percentageProps = onlyAcceptPercentage && {
    step: 0.1,
  }

  const percentageFactor = onlyAcceptPercentage ? 0.01 : 1
  const handleChange = (e: ChangeEvent<HTMLInputElement> | string) => {
    const input = defaultTo(e, path([ 'target', 'value' ], e)) as string
    onInputChange(input)

    const value = advancedParseFloat(parseFloat(input) * percentageFactor)

    const filteredNaN = Number.isNaN(value)
      ? ''
      : value

    onChange(`${filteredNaN}`)
  }

  return (
    <ChakraNumberInput
      variant={ variant }
      size={ size }
      onChange={ handleChange }
      id={ name }
      { ...percentageProps }
      { ...rest }
    >
      <NumberInputField onChange={ handleChange } />
      { enableStepperArrows && (
      <NumberInputStepper includePercentage={ onlyAcceptPercentage } />
      ) }
    </ChakraNumberInput>
  )
}
