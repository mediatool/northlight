import React from 'react'
import {
  DropdownIndicatorProps,
  GroupBase,
  MultiValueGenericProps,
  OptionProps,
  chakraComponents,
} from 'chakra-react-select'
import { SearchDuo } from '@mediatool/icons'
import { Icon } from '../icon'
import { Label, P } from '../typography'
import { SearchBarOptionType } from './types'

export function getComponents<T extends SearchBarOptionType> () {
  return {
    DropdownIndicator: (props: DropdownIndicatorProps<T>) => (
      <chakraComponents.DropdownIndicator { ...props }>
        <Icon as={ SearchDuo } />
      </chakraComponents.DropdownIndicator>
    ),
    Option: (props: OptionProps<T>) => (
      <chakraComponents.Option { ...props }>
        { props.selectProps.customOption ? (
          props.selectProps.customOption(props.data)
        ) : (
          <P>{ props.data.label }</P>
        ) }
      </chakraComponents.Option>
    ),
    MultiValueContainer: (
      props: MultiValueGenericProps<T, boolean, GroupBase<T>>
    ) => (
      <chakraComponents.MultiValueContainer { ...props }>
        { props.selectProps.customTag ? (
          props.selectProps.customTag(props.data)
        ) : (
          <Label>{ props.data.label }</Label>
        ) }
      </chakraComponents.MultiValueContainer>
    ),
  }
}
