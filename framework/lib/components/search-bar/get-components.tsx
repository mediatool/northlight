import React from 'react'
import {
  ControlProps,
  DropdownIndicatorProps,
  GroupBase,
  MenuProps,
  MultiValueGenericProps,
  MultiValueProps,
  OptionProps,
  Props as SelectProps,
  chakraComponents,
} from 'chakra-react-select'
import { equals, merge } from 'ramda'
import { Tag } from '@chakra-ui/react'
import { Box } from '../box'
import { HStack } from '../stack'
import { Icon } from '../icon'
import { SearchBarOptionType } from './types'

interface ExtendedSelectProps
<T extends SearchBarOptionType> extends SelectProps<T, boolean, GroupBase<T>> {
  displayLimit?: number
  customOption?: (option: T) => JSX.Element
  customTag?: (option: T) => JSX.Element
  icon?: React.ComponentType
  leftComponent?: React.ReactNode
  // Add any AsyncSelect specific props if needed
}

type ExtendedProps<T extends SearchBarOptionType, P> = Omit<P, 'selectProps'> & {
  selectProps: ExtendedSelectProps<T>
}

type ExtendedMultiValueProps
<T extends SearchBarOptionType> = ExtendedProps<T, MultiValueProps<T, boolean, GroupBase<T>>>
type ExtendedMenuProps
<T extends SearchBarOptionType> = ExtendedProps<T, MenuProps<T, boolean, GroupBase<T>>>
type ExtendedDropdownIndicatorProps
<T extends SearchBarOptionType> = ExtendedProps<T, DropdownIndicatorProps<T, boolean, GroupBase<T>>>
type ExtendedOptionProps
<T extends SearchBarOptionType> = ExtendedProps<T, OptionProps<T, boolean, GroupBase<T>>>
type ExtendedMultiValueGenericProps
<T extends SearchBarOptionType> = ExtendedProps<T, MultiValueGenericProps<T, boolean, GroupBase<T>>>
type ExtendedControlProps
<T extends SearchBarOptionType> = ExtendedProps<T, ControlProps<T, boolean, GroupBase<T>>>

export function getComponents<T extends SearchBarOptionType> (
  options: { displayLimit?: number, components?: Partial<ExtendedSelectProps<T>['components']> }
): ExtendedSelectProps<T>['components'] {
  const { displayLimit } = options

  return merge(
    {
      Menu: (props: ExtendedMenuProps<T>) => (
        <Box data-testid="select-menu-wrapper-test-id">
          <chakraComponents.Menu { ...(props as MenuProps<T, boolean, GroupBase<T>>) }>
            { props.children }
          </chakraComponents.Menu>
        </Box>
      ),
      DropdownIndicator: (props: ExtendedDropdownIndicatorProps<T>) =>
        (props.selectProps.icon ? (
          <chakraComponents.DropdownIndicator
            { ...(props as DropdownIndicatorProps<T, boolean, GroupBase<T>>) }
          >
            <Icon as={ props.selectProps.icon } />
          </chakraComponents.DropdownIndicator>
        ) : (
          <chakraComponents.DropdownIndicator
            { ...(props as DropdownIndicatorProps<T, boolean, GroupBase<T>>) }
          />
        )),
      Option: (props: ExtendedOptionProps<T>) =>
        (props.selectProps.customOption ? (
          <chakraComponents.Option { ...(props as OptionProps<T, boolean, GroupBase<T>>) }>
            { props.selectProps.customOption(props.data) }
          </chakraComponents.Option>
        ) : (
          <chakraComponents.Option { ...(props as OptionProps<T, boolean, GroupBase<T>>) } />
        )),
      MultiValueContainer: (props: ExtendedMultiValueGenericProps<T>) =>
        (props.selectProps.customTag ? (
          <chakraComponents.MultiValueContainer
            { ...(props as MultiValueGenericProps<T, boolean, GroupBase<T>>) }
          >
            { props.selectProps.customTag(props.data) }
          </chakraComponents.MultiValueContainer>
        ) : (
          <chakraComponents.MultiValueContainer
            { ...(props as MultiValueGenericProps<T, boolean, GroupBase<T>>) }
          />
        )),
      Control: ({ children, ...props }: ExtendedControlProps<T>) =>
        (props.selectProps.leftComponent ? (
          <chakraComponents.Control { ...(props as ControlProps<T, boolean, GroupBase<T>>) }>
            <HStack w="full" pl="2">
              { props.selectProps.leftComponent }
              <HStack w="full" justify="space-between">
                { children }
              </HStack>
            </HStack>
          </chakraComponents.Control>
        ) : (
          <chakraComponents.Control { ...(props as ControlProps<T, boolean, GroupBase<T>>) }>
            { children }
          </chakraComponents.Control>
        )),
      MultiValue: (props: ExtendedMultiValueProps<T>) => {
        if (!displayLimit) {
          return (
            <chakraComponents.MultiValue
              { ...(props as MultiValueProps<T, boolean, GroupBase<T>>) }
            >
              { props.children }
            </chakraComponents.MultiValue>
          )
        }

        const allValues = (props.selectProps.value || []) as T[]
        const totalSelected = allValues.length
        const currentIndex = allValues.findIndex((v) => equals(v, props.data))

        if (totalSelected <= displayLimit) {
          return (
            <chakraComponents.MultiValue
              { ...(props as MultiValueProps<T, boolean, GroupBase<T>>) }
            >
              { props.children }
            </chakraComponents.MultiValue>
          )
        }

        if (currentIndex > displayLimit) {
          return null
        }

        if (currentIndex === displayLimit) {
          const remaining = totalSelected - displayLimit
          return (
            <Tag variant="solid" colorScheme="blue">
              +{ remaining }
            </Tag>
          )
        }

        return (
          <chakraComponents.MultiValue { ...(props as MultiValueProps<T, boolean, GroupBase<T>>) }>
            { props.children }
          </chakraComponents.MultiValue>
        )
      },
    },
    options.components || {}
  ) as unknown as ExtendedSelectProps<T>['components']
}
