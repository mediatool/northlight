import React from 'react'
import {
  ControlProps,
  DropdownIndicatorProps,
  GroupBase,
  MenuProps,
  MultiValueGenericProps,
  OptionProps,
  chakraComponents,
} from 'chakra-react-select'
import { merge } from 'ramda'
import { Box } from '../box'
import { HStack } from '../stack'
import { Icon } from '../icon'
import { SearchBarOptionType } from './types'

export function getComponents<T extends SearchBarOptionType> (
  components?: Record<string, any>
) {
  return merge(
    {
      Menu: (props: MenuProps<T>) => (
        <Box data-testid="select-menu-wrapper-test-id">
          <chakraComponents.Menu { ...props }>
            { props.children }
          </chakraComponents.Menu>
        </Box>
      ),
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
      Control: ({
        children,
        ...props
      }: ControlProps<T, boolean, GroupBase<T>>) =>
        (props.selectProps.leftComponent ? (
          <chakraComponents.Control { ...props }>
            <HStack w="full" pl="2">
              { props.selectProps.leftComponent }
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
    },
    components || {}
  )
}
