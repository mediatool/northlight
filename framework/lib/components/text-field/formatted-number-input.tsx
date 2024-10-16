import React, { ComponentType, useEffect, useState } from 'react'
import { identity, isNil } from 'ramda'
import {
  InputAttributes,
  NumberFormatValues,
  NumericFormat,
  SourceInfo,
  numericFormatter,
} from 'react-number-format'
import { InputGroupWrapper } from '../../internal-components/input-group-wrapper/input-group-wrapper'
import { Input } from '../input'
import {
  FormattedNumberInputPreset,
  FormattedNumberInputProps,
  PresetOptions,
} from './types'
import { roundToPrecision } from './round-to-precision'

const MyInput = ({ controlledValue, ...rest }: any) => (
  <Input { ...rest } value={ controlledValue } />
)

const presetMap: Record<FormattedNumberInputPreset, PresetOptions> = {
  eu: {
    thousandSeparator: ' ',
    decimalSeparator: ',',
  },
  us: {
    thousandSeparator: ',',
    decimalSeparator: '.',
  },
  nor: {
    thousandSeparator: '.',
    decimalSeparator: ',',
  },
}

/**
 * @see {@link https://northlight.dev/reference/formatted-number-input-field}
  @example (Example)
 * The formatted number input is built uppon react-number-format
 * It formats numbers by adjusting thousand and decimal separators
 * ex : 22345351.34234 => 222 453 51,34234
 * It comes with three presets: eu, us and nor.
 * These have the following separators:
  (?
    <FormattedNumberInput
      preset="us"
      onChange={(values) => console.log(values.floatValue)}
      isPercentage={true}
      max={1E9}
      min={0}
    />
  ?)

  @example (Example)
  ### Nor preset
  (?
    <FormattedNumberInput
      preset="nor"
      onChange={(values) => console.log(values.floatValue)}
      value={320341345102.34134}
      numberOfDecimals={5}
    />
  ?)

  @example (Example)
  ### Eu preset
  (?
    <FormattedNumberInput
      preset="eu"
      onChange={(values) => console.log(values.floatValue)}
      value={320341345102.34134}
      numberOfDecimals={5}
    />
  ?)

 */
export const FormattedNumberInput = ({
  preset = 'eu',
  isPercentage = false,
  onChange = identity,
  value: valueProp,
  numberOfDecimals = 2,
  max = Infinity,
  min = -Infinity,
  inputLeftElement,
  inputRightElement,
  onBlur,
  ...rest
}: FormattedNumberInputProps) => {
  const [ valueState, setValueState ] = useState(valueProp)
  const isControlled = typeof valueProp !== 'undefined'
  const value = isControlled ? valueProp : valueState
  const props = presetMap[preset]

  const getNumberFormatValues = (number: number) => ({
    floatValue: number,
    formattedValue: numericFormatter(number.toString(), props),
    value: number.toString(),
  })

  const validateRange = () => {
    if (isNil(value)) return
    const vNum = typeof value === 'string' ? parseFloat(value) : value
    const factor = isPercentage ? 100 : 1
    if (vNum * factor > max) {
      const newValue = roundToPrecision(max / factor, numberOfDecimals)
      setValueState(newValue)
      onChange(getNumberFormatValues(newValue))
    }
    if (vNum * factor < min) {
      const newValue = roundToPrecision(min / factor, numberOfDecimals)
      setValueState(newValue)
      onChange(getNumberFormatValues(newValue))
    }
  }

  const onValueChangeHandler = (
    values: NumberFormatValues,
    sourceInfo: SourceInfo
  ) => {
    const newFloatValue =
      values.floatValue && isPercentage
        ? roundToPrecision(values.floatValue / 100, numberOfDecimals)
        : values.floatValue
    setValueState(newFloatValue)
    onChange(
      {
        ...values,
        floatValue: newFloatValue,
      },
      sourceInfo
    )
  }

  useEffect(() => {
    validateRange()
  }, [ value ])

  const suffix = isPercentage ? '%' : ''

  return (
    <InputGroupWrapper
      inputLeftElement={ inputLeftElement }
      inputRightElement={ inputRightElement }
    >
      <NumericFormat
        allowLeadingZeros={ true }
        customInput={ MyInput as ComponentType<InputAttributes> }
        onBlur={ (e) => {
          onBlur?.(e)
          validateRange()
        } }
        onValueChange={ onValueChangeHandler }
        decimalScale={ numberOfDecimals }
        value={
          isPercentage
            ? roundToPrecision(
              parseFloat(`${value ?? 0}`) * 100,
              numberOfDecimals
            )
            : value
        }
        suffix={ isPercentage ? '%' : '' }
        // @ts-ignore
        controlledValue={ `
${
  value
    ? getNumberFormatValues(
      Number(
        isPercentage
          ? roundToPrecision(
            parseFloat(`${value ?? 0}`) * 100,
            numberOfDecimals
          )
          : value
      )
    ).formattedValue
    : 0
}
${suffix}` }
        { ...props }
        { ...rest }
      />
    </InputGroupWrapper>
  )
}
