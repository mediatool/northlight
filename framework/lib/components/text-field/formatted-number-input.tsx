import React, { ComponentType, useState } from 'react'
import { identity, isNil } from 'ramda'
import {
  InputAttributes,
  NumberFormatValues,
  NumericFormat,
  SourceInfo,
} from 'react-number-format'
import { InputGroupWrapper } from '../../internal-components/input-group-wrapper/input-group-wrapper'
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
  value,
  numberOfDecimals = 2,
  max = Infinity,
  min = -Infinity,
  inputLeftElement,
  inputRightElement,
  ...rest
}: FormattedNumberInputProps) => {
  const props = presetMap[preset]
  const [ v, setV ] = useState(value)

  const validateRange = () => {
    if (isNil(v)) return
    const vNum = typeof v === 'string' ? parseFloat(v) : v
    const factor = isPercentage ? 100 : 1
    if (vNum * factor > max) {
      const newValue = roundToPrecision(max / factor, numberOfDecimals)
      setV(newValue)
    }
    if (vNum * factor < min) {
      const newValue = roundToPrecision(min / factor, numberOfDecimals)
      setV(newValue)
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
    setV(newFloatValue)
    onChange(
      {
        ...values,
        floatValue: newFloatValue,
      },
      sourceInfo
    )
  }

  return (
    <InputGroupWrapper
      inputLeftElement={ inputLeftElement }
      inputRightElement={ inputRightElement }
    >
      <NumericFormat
        allowLeadingZeros={ true }
        customInput={ Input as ComponentType<InputAttributes> }
        onBlur={ validateRange }
        onValueChange={ onValueChangeHandler }
        decimalScale={ numberOfDecimals }
        value={
          isPercentage
            ? roundToPrecision(parseFloat(`${v ?? 0}`) * 100, numberOfDecimals)
            : v
        }
        suffix={ isPercentage ? '%' : '' }
        { ...props }
        { ...rest }
      />
    </InputGroupWrapper>
  )
}
