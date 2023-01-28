import React from 'react'
import {
  DropdownIndicatorProps,
  GroupBase,
  MultiValueGenericProps,
  OptionProps,
  chakraComponents,
} from 'chakra-react-select'
import { Icon } from '../icon'
import { SearchBarOptionType } from './types'

export function getComponents<T extends SearchBarOptionType> () {
  return {
    DropdownIndicator: (props: DropdownIndicatorProps<T>) => (
      props.selectProps.icon
        ? (
          <chakraComponents.DropdownIndicator { ...props }>
            <Icon as={ props.selectProps.icon } />
          </chakraComponents.DropdownIndicator>

        )
        : (
          <chakraComponents.DropdownIndicator { ...props } />
        )

    ),
    Option: (props: OptionProps<T>) =>
      (props.selectProps.customOption
        ? (
          <chakraComponents.Option { ...props }>
            { props.selectProps.customOption(props.data) }
          </chakraComponents.Option>
        )
        : <chakraComponents.Option { ...props } />
      ),
    MultiValueContainer: (
      props: MultiValueGenericProps<T, boolean, GroupBase<T>>
    ) =>
      (props.selectProps.customTag
        ? (
          <chakraComponents.MultiValueContainer { ...props }>
            { props.selectProps.customTag(props.data) }
          </chakraComponents.MultiValueContainer>
        )
        : <chakraComponents.MultiValueContainer { ...props } />
      ),
  }
}
