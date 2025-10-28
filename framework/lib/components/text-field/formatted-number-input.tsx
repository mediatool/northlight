import React, { ComponentType, useEffect } from 'react'
import { defaultTo, identity, isNil } from 'ramda'
import {
  InputAttributes,
  NumberFormatValues,
  NumericFormat,
  SourceInfo,
  numericFormatter,
} from 'react-number-format'
import { InputGroupWrapper } from '../../internal-components'
import { Input } from '../input'
import {
  FormattedNumberInputPreset,
  FormattedNumberInputProps,
  PresetOptions,
} from './types'
import { roundToPrecision } from './round-to-precision'

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
  numberOfDecimals,
  max = Infinity,
  min = -Infinity,
  inputLeftElement,
  inputRightElement,
  onBlur,
  ...rest
}: FormattedNumberInputProps) => {
  const props = presetMap[preset]

  const value = valueProp ?? ''

  const defaultNumberOfDecimals = defaultTo(2, numberOfDecimals)

  const getNumberFormatValues = (number: number) => ({
    floatValue: number,
    formattedValue: numericFormatter(number.toString(), props),
    value: number.toString(),
  })

  const validateRange = () => {
    if (isNil(value)) return
    const vNum = typeof value === 'string' ? parseFloat(value) : value
    if (isNil(numberOfDecimals) && !isPercentage) {
      onChange(getNumberFormatValues(vNum))
      return
    }
    const factor = isPercentage ? 100 : 1
    if (vNum * factor > max) {
      const newValue = roundToPrecision(max / factor, defaultNumberOfDecimals)
      onChange(getNumberFormatValues(newValue))
    }
    if (vNum * factor < min) {
      const newValue = roundToPrecision(min / factor, defaultNumberOfDecimals)
      onChange(getNumberFormatValues(newValue))
    }
  }

  const onValueChangeHandler = (
    values: NumberFormatValues,
    sourceInfo: SourceInfo
  ) => {
    const newFloatValue =
      values.floatValue && isPercentage
        ? roundToPrecision(values.floatValue / 100, defaultNumberOfDecimals)
        : values.floatValue
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

  return (
    <InputGroupWrapper
      inputLeftElement={ inputLeftElement }
      inputRightElement={ inputRightElement }
    >
      <NumericFormat
        allowLeadingZeros={ true }
        customInput={ Input as ComponentType<InputAttributes> }
        onBlur={ (e) => {
          onBlur?.(e)
          validateRange()
        } }
        onValueChange={ onValueChangeHandler }
        decimalScale={ numberOfDecimals }
        value={
          isPercentage
            ? roundToPrecision(parseFloat(`${value ?? 0}`) * 100, defaultNumberOfDecimals)
            : value
        }
        suffix={ isPercentage ? '%' : '' }
        { ...props }
        { ...rest }
      />
    </InputGroupWrapper>
  )
}
