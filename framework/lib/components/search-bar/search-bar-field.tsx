import React from 'react'
import { FieldValues } from 'react-hook-form'
import { XCloseSolid } from '@northlight/icons'
import { identity, isEmpty } from 'ramda'
import { SearchBarFieldProps, SearchBarOptionType } from './types'
import { Field } from '../form'
import { SearchBar } from './search-bar'
import { HStack } from '../stack'
import { IconButton } from '../icon-button'
import { Icon } from '../icon'
import { InputGroupWrapper } from '../../internal-components/input-group-wrapper/input-group-wrapper'

export const SearchBarField = <T extends SearchBarOptionType, K extends boolean = false> ({
  name,
  label,
  direction = 'column',
  isMulti,
  isRequired,
  validate,
  isClearable = true,
  onChange: onChangeCallback = identity,
  inputLeftElement,
  inputRightElement,
  ...rest
}: SearchBarFieldProps<T, K>) => (
  <Field
    name={ name }
    label={ label }
    direction={ direction }
    isRequired={ isRequired }
    noLabelConnection={ true }
    validate={ validate }
  >
    { ({ value, onChange }) => (
      <HStack w="full">
        <InputGroupWrapper
          inputLeftElement={ inputLeftElement }
          inputRightElement={ inputRightElement }
        >
          <SearchBar
            name={ name }
            isMulti={ isMulti }
            onChange={ (values: FieldValues, event) => {
              onChange(
                isMulti
                  ? values
                  : values.value
              )
              onChangeCallback(values as T | T[], event)
            } }
            value={ value }
            { ...rest }
          />
        </InputGroupWrapper>
        <IconButton
          aria-label={ `${name}-close-button` }
          variant="danger"
          size="lg"
          fontSize="sm"
          hidden={ isEmpty(value) || !isClearable }
          onClick={ () => onChange([]) }
          icon={ <Icon as={ XCloseSolid } /> }
        />
      </HStack>
    ) }
  </Field>
  )
