import React from 'react'
import { FieldValues } from 'react-hook-form'
import { XCloseSolid } from '@mediatool/icons'
import { identity } from 'ramda'
import { Option, SelectFieldProps } from './types'
import { Field } from '../form'
import { Select } from './select'
import { HStack } from '../stack'
import { IconButton } from '../icon-button'
import { Icon } from '../icon'
import { InputGroupWrapper } from '../../internal-components'

export function SelectField<T extends Option> ({
  name,
  label,
  options,
  direction = 'column',
  isMulti,
  isRequired,
  validate,
  isClearable = true,
  onChange: onChangeCallback = identity,
  inputLeftElement,
  inputRightElement,
  ...rest
}: SelectFieldProps<T>) {
  return (
    <Field
      name={ name }
      label={ label }
      direction={ direction }
      isRequired={ isRequired }
      isSelect={ true }
      validate={ validate }
    >
      { ({ value, onChange }) => (
        <HStack w="full">
          <InputGroupWrapper
            inputLeftElement={ inputLeftElement }
            inputRightElement={ inputRightElement }
          >
            <Select<T>
              name={ name }
              options={ options }
              isMulti={ isMulti }
              onChange={ (values: FieldValues, event) => {
                onChange(
                  isMulti
                    ? values.map((item: any) => item.value)
                    : values.value
                )
                onChangeCallback(values as T | T[], event)
              } }
              value={
              value
                ? options?.flatMap((inner : any) => (inner.options ? inner.options : inner))
                  .filter((option: any) => value.includes(option.value)) as any
                : null
            }
              { ...rest }
            />
          </InputGroupWrapper>
          <IconButton
            aria-label={ `${name}-close-button` }
            variant="danger"
            size="sm"
            fontSize="xs"
            hidden={ value === '' || !isClearable }
            onClick={ onChange }
            icon={ <Icon as={ XCloseSolid } /> }
          />
        </HStack>
      ) }
    </Field>
  )
}
