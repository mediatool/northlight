import React from 'react'
import {
  ControlProps,
  DropdownIndicatorProps,
  GroupBase,
  MultiValueGenericProps,
  OptionProps,
  chakraComponents,
} from 'chakra-react-select'
import { HStack } from '../stack'
import { Icon } from '../icon'
import { SearchBarOptionType } from './types'

interface GetComponentsProps {
  defaultControl?: boolean
}

export function getComponents<T extends SearchBarOptionType> ({
  defaultControl = true,
}: GetComponentsProps) {
  const control = defaultControl
    ? {}
    : {
      Control: ({
        children,
        ...props
      }: ControlProps<T, boolean, GroupBase<T>>) =>
        (props.selectProps.leftIcon ? (
          <chakraComponents.Control { ...props }>
            <HStack w="full" pl="2">
              <Icon as={ props.selectProps.leftIcon } />
              <HStack w="full" justify="space-between">
                { children }
              </HStack>
            </HStack>
          </chakraComponents.Control>
        ) : (
          <chakraComponents.Control { ...props }>
            { children }
          </chakraComponents.Control>
        )),
    }
  return {
    DropdownIndicator: (props: DropdownIndicatorProps<T>) =>
      (props.selectProps.icon ? (
        <chakraComponents.DropdownIndicator { ...props }>
          <Icon as={ props.selectProps.icon } />
        </chakraComponents.DropdownIndicator>
      ) : (
        <chakraComponents.DropdownIndicator { ...props } />
      )),
    Option: (props: OptionProps<T>) =>
      (props.selectProps.customOption ? (
        <chakraComponents.Option { ...props }>
          { props.selectProps.customOption(props.data) }
        </chakraComponents.Option>
      ) : (
        <chakraComponents.Option { ...props } />
      )),
    MultiValueContainer: (
      props: MultiValueGenericProps<T, boolean, GroupBase<T>>
    ) =>
      (props.selectProps.customTag ? (
        <chakraComponents.MultiValueContainer { ...props }>
          { props.selectProps.customTag(props.data) }
        </chakraComponents.MultiValueContainer>
      ) : (
        <chakraComponents.MultiValueContainer { ...props } />
      )),
    ...control,
  }
}
