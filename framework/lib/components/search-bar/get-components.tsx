import React from 'react'
import {
  ControlProps,
  DropdownIndicatorProps,
  GroupBase,
  MultiValueGenericProps,
  OptionProps,
  SelectComponentsConfig,
  chakraComponents,
} from 'chakra-react-select'
import { HStack } from '../stack'
import { Icon } from '../icon'
import { SearchBarOptionType, CustomElementType } from './types.ts'

type CustomProps = {
  customOption?: CustomElementType<any>
  customTag?: CustomElementType<any>
  icon?: React.ComponentType<any>
  leftIcon?: React.ComponentType<any>
}

type ExtendSelectProps<T extends { selectProps: unknown }> = T & {
  selectProps: T['selectProps'] & CustomProps
}

export function getComponents<T extends SearchBarOptionType, K extends boolean = false>(): (
  SelectComponentsConfig<T, K, GroupBase<T>>
) {
  return {
    DropdownIndicator: (props: ExtendSelectProps<DropdownIndicatorProps<T, K>>) =>
      props.selectProps.icon ? (
        <chakraComponents.DropdownIndicator {...props}>
          <Icon as={props.selectProps.icon} />
        </chakraComponents.DropdownIndicator>
      ) : (
        <chakraComponents.DropdownIndicator {...props} />
      ),
    Option: (props: ExtendSelectProps<OptionProps<T, K>>) =>
      props.selectProps.customOption ? (
        <chakraComponents.Option {...props}>
          {props.selectProps.customOption(props.data)}
        </chakraComponents.Option>
      ) : (
        <chakraComponents.Option {...props} />
      ),
    MultiValueContainer: (
      props: ExtendSelectProps<MultiValueGenericProps<T, K, GroupBase<T>>>
    ) =>
      props.selectProps.customTag ? (
        <chakraComponents.MultiValueContainer {...props}>
          {props.selectProps.customTag(props.data)}
        </chakraComponents.MultiValueContainer>
      ) : (
        <chakraComponents.MultiValueContainer {...props} />
      ),
    Control: ({
      children,
      ...props
    }: ExtendSelectProps<ControlProps<T, K, GroupBase<T>>>) =>
      props.selectProps.leftIcon ? (
        <chakraComponents.Control {...props}>
          <HStack w="full" pl="2">
            <Icon as={props.selectProps.leftIcon} />
            <HStack w='full' justify='space-between'>
              {children}
            </HStack>
          </HStack>
        </chakraComponents.Control>
      ) : (
        <chakraComponents.Control {...props}>
          {children}
        </chakraComponents.Control>
      ),
  }
}
