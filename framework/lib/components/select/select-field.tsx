import React, { forwardRef } from 'react'
import { XCloseSolid } from '@northlight/icons'
import { equals, identity, isNil } from 'ramda'
import { Option, SelectFieldProps } from './types'
import { Field } from '../form'
import { Select } from './select'
import { HStack } from '../stack'
import { IconButton } from '../icon-button'
import { Icon } from '../icon'
import { InputGroupWrapper } from '../../internal-components'

const BaseSelectField = <T extends Option, K extends boolean = false>(
  {
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
  }: SelectFieldProps<T, K>,
  ref: React.Ref<HTMLDivElement>
) => (
  <Field
    name={ name }
    label={ label }
    direction={ direction }
    isRequired={ isRequired }
    noLabelConnection={ true }
    validate={ validate }
    ref={ ref }
  >
    { ({ value, onChange }) => (
      <HStack w="full">
        <InputGroupWrapper
          inputLeftElement={ inputLeftElement }
          inputRightElement={ inputRightElement }
        >
          <Select<T, K>
            name={ name }
            options={ options }
            isMulti={ isMulti }
            onChange={ (values, event) => {
              onChange(
                isMulti
                  ? (values as T[]).map((item: any) => item.value)
                  : (values as T).value
              )
              onChangeCallback(values as K extends true ? T[] : T, event)
            } }
            value={
              value
                ? (options
                  ?.flatMap((inner: any) =>
                    (inner.options ? inner.options : inner)
                  )
                  .filter((option: any) =>
                    (isMulti
                      ? value.includes(option.value)
                      : equals(value, option.value))
                  ) as any)
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
          hidden={ isNil(value) || !isClearable }
          onClick={ () => {
            onChange(undefined)
            onChangeCallback(undefined, { action: 'clear', removedValues: value })
          } }
          icon={ <Icon as={ XCloseSolid } /> }
        />
      </HStack>
    ) }
  </Field>
  )

export const SelectField = forwardRef(BaseSelectField)
