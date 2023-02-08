import React, { useContext, useRef } from 'react'
import { CheckSolid } from '@mediatool/icons'
import { useCheckboxGroupItem } from '@react-aria/checkbox'
import { SlideFade, useMultiStyleConfig } from '@chakra-ui/react'
import { useRadio } from '@react-aria/radio'
import { useFocusRing } from '@react-aria/focus'
import { merge, omit } from 'ramda'
import { CheckboxGroupState } from '@react-stately/checkbox'
import { RadioGroupState } from '@react-stately/radio'
import { mergeProps } from '@react-aria/utils'
import { FlipButtonContext } from './utils'
import { HStack } from '../stack'
import { Icon } from '../icon'
import { Text } from '../text'
import { CustomContainerPropsType, CustomFlipButtonPropsType, FlipButtonProps } from './types'

export const FlipButton = (props: FlipButtonProps) => {
  const {
    children,
    size,
    variant,
    isMulti,
    isDisabled = false,
    icon,
    value,
    ...rest
  } = props
  const state = useContext(FlipButtonContext)
  const ref = useRef(null)

  const propsWithoutChildren = omit([ 'children' ], props)
  const { inputProps } = isMulti
    ? useCheckboxGroupItem(propsWithoutChildren, state as CheckboxGroupState, ref)
    : useRadio(propsWithoutChildren, state as RadioGroupState, ref)

  const { button, buttonIcon } = useMultiStyleConfig('FlipButton', { size, variant })
  const { focusProps, isFocusVisible: isFocused } = useFocusRing()
  const focusStyles = {
    outline: 'none',
    ring: '2px',
    ringColor: 'border.wcag',
    ringOffset: '1px',
  }
  const focusRing = isFocused ? focusStyles : {}

  const isSelected = isMulti
    ? (state as CheckboxGroupState).isSelected(value)
    : (state as RadioGroupState).selectedValue === value

  const flipButtonProps: CustomFlipButtonPropsType = {
    ...mergeProps(inputProps, focusProps),
    ref,
    style: { opacity: '0', width: '0', height: '0' },
    'aria-label': isMulti ? 'Checkbox-input' : 'Radio-input',
  }

  const containerProps: CustomContainerPropsType = {
    'aria-checked': isSelected,
    'aria-disabled': isDisabled,
    sx: focusRing,
    as: 'label',
    cursor: 'pointer',
  }

  return typeof children === 'function'
    ? children({
      state,
      containerProps,
      flipButtonProps,
      isFocused,
      isSelected,
      isDisabled,
      isMulti: isMulti || false,
      focusRing,
      value,
      ...rest,
    })
    : (
      <HStack
        spacing={ isSelected || icon ? 2 : 0 }
        sx={ merge(button, isFocused ? focusStyles : {}) }
        aria-checked={ isSelected }
        aria-disabled={ isDisabled }
        as="label"
      >
        <input { ...flipButtonProps } />
        { icon
          ? (
            <Icon as={ icon || CheckSolid } sx={ buttonIcon } />
          ) : isSelected && (
          <SlideFade in={ isSelected }>
            <Icon as={ icon || CheckSolid } sx={ buttonIcon } />
          </SlideFade>
          ) }
        <Text textAlign="center">{ children }</Text>
      </HStack>
    )
}
